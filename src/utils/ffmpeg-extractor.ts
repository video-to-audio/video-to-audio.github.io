import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL, fetchFile } from '@ffmpeg/util';
import { extractAudioViaWebAudio } from './audio-helpers';

export type AudioFormat = 'MP3' | 'WAV' | 'AAC' | 'M4A';
export type AudioBitrate = '128k' | '192k' | '256k' | '320k';

export interface ExtractionOptions {
  format: AudioFormat;
  bitrate: AudioBitrate;
  trimStart?: number;
  trimEnd?: number;
}

export interface ExtractionResult {
  blob: Blob;
  blobUrl: string;
  fileName: string;
  fileSize: number;
  format: AudioFormat;
  bitrate: AudioBitrate;
  duration: number;
}

export type ProgressCallback = (percent: number, stageKey: string) => void;

class FFmpegAudioEngine {
  private ffmpeg: FFmpeg | null = null;
  private isLoaded: boolean = false;
  private isLoading: boolean = false;
  private loadPromise: Promise<void> | null = null;

  /**
   * Initializes and loads the single-threaded FFmpeg WASM core with CDN fallback
   */
  public async load(onProgress?: ProgressCallback): Promise<void> {
    if (this.isLoaded && this.ffmpeg) return;

    if (this.isLoading && this.loadPromise) {
      return this.loadPromise;
    }

    this.isLoading = true;
    if (onProgress) onProgress(8, 'status.loadingCore');

    this.loadPromise = (async () => {
      const coreVersion = '0.12.6';
      const cdnEndpoints = [
        `https://unpkg.com/@ffmpeg/core@${coreVersion}/dist/esm`,
        `https://cdn.jsdelivr.net/npm/@ffmpeg/core@${coreVersion}/dist/esm`
      ];

      let lastError: any = null;

      for (const baseURL of cdnEndpoints) {
        try {
          const ffmpeg = new FFmpeg();

          ffmpeg.on('log', ({ message }) => {
            if ((import.meta as any).env?.DEV) {
              console.log('[FFmpeg]:', message);
            }
          });

          const coreURL = await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript');
          const wasmURL = await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm');

          await ffmpeg.load({ coreURL, wasmURL });

          this.ffmpeg = ffmpeg;
          this.isLoaded = true;
          this.isLoading = false;
          return;
        } catch (err) {
          console.warn(`Failed loading FFmpeg core from ${baseURL}:`, err);
          lastError = err;
        }
      }

      this.isLoading = false;
      this.isLoaded = false;
      this.loadPromise = null;
      throw lastError || new Error('Failed to load FFmpeg.wasm from all CDN mirrors');
    })();

    return this.loadPromise;
  }

  /**
   * Builds FFmpeg CLI command arguments
   */
  private buildCliArgs(
    inputName: string,
    outputName: string,
    options: ExtractionOptions
  ): string[] {
    const args: string[] = [];

    // Force overwrite without prompt to prevent hanging in WASM
    args.push('-y');

    // Optional Trim Start
    if (options.trimStart !== undefined && options.trimStart > 0) {
      args.push('-ss', options.trimStart.toString());
    }

    // Input file
    args.push('-i', inputName);

    // Optional Trim Duration / End
    if (options.trimEnd !== undefined && options.trimEnd > 0) {
      if (options.trimStart !== undefined && options.trimStart > 0) {
        args.push('-t', (options.trimEnd - options.trimStart).toString());
      } else {
        args.push('-t', options.trimEnd.toString());
      }
    }

    // Disable video stream (-vn)
    args.push('-vn');

    // Encoder configuration
    switch (options.format) {
      case 'MP3':
        args.push('-c:a', 'libmp3lame', '-b:a', options.bitrate || '320k', '-ar', '44100');
        break;
      case 'WAV':
        args.push('-c:a', 'pcm_s16le', '-ar', '44100');
        break;
      case 'AAC':
        args.push('-c:a', 'aac', '-b:a', options.bitrate || '320k', '-ar', '44100');
        break;
      case 'M4A':
        args.push('-c:a', 'aac', '-b:a', options.bitrate || '320k', '-ar', '44100', '-movflags', '+faststart');
        break;
      default:
        args.push('-c:a', 'libmp3lame', '-b:a', '320k');
    }

    // Output file
    args.push(outputName);

    return args;
  }

  /**
   * Determines MIME type for output audio
   */
  private getMimeType(format: AudioFormat): string {
    switch (format) {
      case 'MP3':
        return 'audio/mpeg';
      case 'WAV':
        return 'audio/wav';
      case 'AAC':
        return 'audio/aac';
      case 'M4A':
        return 'audio/mp4';
      default:
        return 'audio/mpeg';
    }
  }

  /**
   * Extracts audio from a video File with FFmpeg WASM and native Web Audio fallback
   */
  public async extractAudio(
    videoFile: File,
    options: ExtractionOptions,
    onProgress?: ProgressCallback
  ): Promise<ExtractionResult> {
    const ext = options.format.toLowerCase();
    const baseName = videoFile.name.substring(0, videoFile.name.lastIndexOf('.')) || 'extracted_audio';
    const cleanOutFileName = `${baseName}.${ext}`;

    // Attempt FFmpeg WebAssembly extraction first
    try {
      if (!this.isLoaded || !this.ffmpeg) {
        if (onProgress) onProgress(5, 'status.init');
        await this.load(onProgress);
      }

      const ffmpeg = this.ffmpeg!;
      const timestamp = Date.now();
      const safeVideoName = videoFile.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const inputName = `input_${timestamp}_${safeVideoName}`;
      const outputName = `output_${timestamp}.${ext}`;

      // Progress listener
      const progressHandler = ({ progress }: { progress: number; time: number }) => {
        if (onProgress) {
          const percent = Math.min(95, Math.max(20, Math.round(20 + progress * 70)));
          onProgress(percent, 'status.processing');
        }
      };

      ffmpeg.on('progress', progressHandler);

      try {
        if (onProgress) onProgress(15, 'status.writingFs');
        const fileData = await fetchFile(videoFile);
        await ffmpeg.writeFile(inputName, fileData);

        if (onProgress) onProgress(30, 'status.processing');
        const cliArgs = this.buildCliArgs(inputName, outputName, options);
        
        const exitCode = await ffmpeg.exec(cliArgs);
        if (exitCode !== 0) {
          throw new Error(`FFmpeg exit code ${exitCode}`);
        }

        if (onProgress) onProgress(90, 'status.readingOutput');
        const outputData = (await ffmpeg.readFile(outputName)) as Uint8Array;

        const mimeType = this.getMimeType(options.format);
        const audioBlob = new Blob([new Uint8Array(outputData)], { type: mimeType });
        const audioBlobUrl = URL.createObjectURL(audioBlob);

        if (onProgress) onProgress(98, 'status.cleanup');
        try {
          await ffmpeg.deleteFile(inputName);
          await ffmpeg.deleteFile(outputName);
        } catch {
          // ignore
        }

        if (onProgress) onProgress(100, 'status.complete');

        return {
          blob: audioBlob,
          blobUrl: audioBlobUrl,
          fileName: cleanOutFileName,
          fileSize: audioBlob.size,
          format: options.format,
          bitrate: options.bitrate,
          duration: 0
        };
      } finally {
        ffmpeg.off('progress', progressHandler);
      }
    } catch (ffmpegErr) {
      console.warn('FFmpeg extraction encountered an issue, trying fallback converter:', ffmpegErr);

      // Fallback using Native Web Audio API
      try {
        if (onProgress) onProgress(40, 'status.processing');
        const { blob: wavBlob, duration } = await extractAudioViaWebAudio(videoFile, onProgress);
        
        // If user requested WAV, return WAV
        // If user requested MP3/AAC but FFmpeg was unavailable, return high-fidelity lossless WAV
        const finalFormat: AudioFormat = options.format === 'WAV' ? 'WAV' : 'WAV';
        const finalExt = finalFormat.toLowerCase();
        const fallbackFileName = `${baseName}.${finalExt}`;
        const blobUrl = URL.createObjectURL(wavBlob);

        if (onProgress) onProgress(100, 'status.complete');

        return {
          blob: wavBlob,
          blobUrl,
          fileName: fallbackFileName,
          fileSize: wavBlob.size,
          format: finalFormat,
          bitrate: options.bitrate,
          duration
        };
      } catch (fallbackErr) {
        console.error('Both FFmpeg WASM and Web Audio fallback failed:', fallbackErr);
        throw ffmpegErr || fallbackErr;
      }
    }
  }

  /**
   * Resets engine instance
   */
  public async terminate(): Promise<void> {
    if (this.ffmpeg) {
      try {
        await this.ffmpeg.terminate();
      } catch {
        // ignore
      }
      this.ffmpeg = null;
      this.isLoaded = false;
      this.isLoading = false;
      this.loadPromise = null;
    }
  }
}

// Export singleton instance
export const ffmpegExtractor = new FFmpegAudioEngine();
