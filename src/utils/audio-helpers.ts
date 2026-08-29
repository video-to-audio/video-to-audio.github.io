/**
 * Video & Audio Helper Utilities
 */

export interface VideoMetadata {
  duration: number;
  formattedDuration: string;
  width: number;
  height: number;
  thumbnailUrl: string;
  fileName: string;
  fileSize: number;
  formattedSize: string;
  mimeType: string;
}

/**
 * Formats raw bytes into human readable format (KB, MB, GB)
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
  if (!+bytes || bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

/**
 * Formats time in seconds to MM:SS or HH:MM:SS
 */
export function formatDuration(seconds: number): string {
  if (!seconds || isNaN(seconds) || seconds < 0) return '00:00';

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hrs > 0) {
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Generates clean output filename with new audio extension
 */
export function sanitizeFilename(originalFilename: string, newExt: string): string {
  const cleanExt = newExt.toLowerCase().replace(/^\./, '');
  const lastDotIndex = originalFilename.lastIndexOf('.');
  const baseName = lastDotIndex !== -1 ? originalFilename.slice(0, lastDotIndex) : originalFilename;
  
  // Replace invalid filesystem characters
  const sanitizedBase = baseName.replace(/[/\\?%*:|"<>]/g, '_').trim() || 'extracted-audio';
  return `${sanitizedBase}.${cleanExt}`;
}

/**
 * Computes space savings percentage
 */
export function calculateSpaceSaved(originalBytes: number, newBytes: number): number {
  if (originalBytes <= 0 || newBytes <= 0 || newBytes >= originalBytes) return 0;
  const saved = ((originalBytes - newBytes) / originalBytes) * 100;
  return Math.round(saved * 10) / 10;
}

/**
 * Extracts metadata, duration and a thumbnail preview frame from video file via HTML5 Canvas
 */
export async function extractVideoMetadata(file: File): Promise<VideoMetadata> {
  return new Promise((resolve, reject) => {
    // Basic verification
    if (!file || !file.type.startsWith('video/')) {
      // In case MIME type is missing from file picker, check file extension
      const validExtensions = ['.mp4', '.webm', '.mov', '.mkv', '.avi', '.flv', '.wmv', '.m4v', '.3gp'];
      const hasValidExt = validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
      if (!hasValidExt) {
        reject(new Error('INVALID_VIDEO_FILE'));
        return;
      }
    }

    const videoUrl = URL.createObjectURL(file);
    const video = document.createElement('video');
    
    video.preload = 'metadata';
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = 'anonymous';

    let isCleanedUp = false;

    const cleanup = () => {
      if (isCleanedUp) return;
      isCleanedUp = true;
      video.pause();
      video.removeAttribute('src');
      video.load();
      URL.revokeObjectURL(videoUrl);
    };

    const timeoutId = setTimeout(() => {
      cleanup();
      // Fallback metadata if frame rendering timed out
      resolve({
        duration: 0,
        formattedDuration: '00:00',
        width: 1280,
        height: 720,
        thumbnailUrl: '',
        fileName: file.name,
        fileSize: file.size,
        formattedSize: formatBytes(file.size),
        mimeType: file.type || 'video/mp4'
      });
    }, 8000);

    video.onloadedmetadata = () => {
      // Seek to 1 second or 10% of video to capture non-black frame
      const targetTime = Math.min(1.0, video.duration > 2 ? video.duration * 0.1 : 0.1);
      video.currentTime = targetTime;
    };

    video.onseeked = () => {
      clearTimeout(timeoutId);
      try {
        const canvas = document.createElement('canvas');
        const width = video.videoWidth || 640;
        const height = video.videoHeight || 360;
        
        // Scale thumbnail for UI performance (max 480px width)
        const maxWidth = 480;
        const scale = width > maxWidth ? maxWidth / width : 1;
        
        canvas.width = Math.round(width * scale);
        canvas.height = Math.round(height * scale);

        const ctx = canvas.getContext('2d');
        let thumbnailUrl = '';

        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          thumbnailUrl = canvas.toDataURL('image/jpeg', 0.85);
        }

        const metadata: VideoMetadata = {
          duration: video.duration || 0,
          formattedDuration: formatDuration(video.duration || 0),
          width,
          height,
          thumbnailUrl,
          fileName: file.name,
          fileSize: file.size,
          formattedSize: formatBytes(file.size),
          mimeType: file.type || 'video/mp4'
        };

        cleanup();
        resolve(metadata);
      } catch (err) {
        cleanup();
        resolve({
          duration: video.duration || 0,
          formattedDuration: formatDuration(video.duration || 0),
          width: video.videoWidth || 640,
          height: video.videoHeight || 360,
          thumbnailUrl: '',
          fileName: file.name,
          fileSize: file.size,
          formattedSize: formatBytes(file.size),
          mimeType: file.type || 'video/mp4'
        });
      }
    };

    video.onerror = () => {
      clearTimeout(timeoutId);
      cleanup();
      // Even if HTML5 video tag fails to decode container frame, return basic file info so FFmpeg can still attempt extraction
      resolve({
        duration: 0,
        formattedDuration: '--:--',
        width: 0,
        height: 0,
        thumbnailUrl: '',
        fileName: file.name,
        fileSize: file.size,
        formattedSize: formatBytes(file.size),
        mimeType: file.type || 'video/mp4'
      });
    };

    video.src = videoUrl;
  });
}

/**
 * Helper to write ASCII strings to DataView
 */
function writeString(view: DataView, offset: number, str: string) {
  for (let i = 0; i < str.length; i++) {
    view.setUint8(offset + i, str.charCodeAt(i));
  }
}

/**
 * Encodes an AudioBuffer into a lossless 16-bit 44.1kHz WAV Blob
 */
export function audioBufferToWav(buffer: AudioBuffer): Blob {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const format = 1; // PCM
  const bitDepth = 16;

  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;

  const length = buffer.length;
  const dataSize = length * blockAlign;
  const headerSize = 44;
  const totalSize = headerSize + dataSize;

  const arrayBuffer = new ArrayBuffer(totalSize);
  const view = new DataView(arrayBuffer);

  // Write WAV RIFF header
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
  view.setUint16(20, format, true); // AudioFormat
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true); // ByteRate
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(view, 36, 'data');
  view.setUint32(40, dataSize, true);

  // Interleave channels & write 16-bit PCM
  const channels: Float32Array[] = [];
  for (let i = 0; i < numChannels; i++) {
    channels.push(buffer.getChannelData(i));
  }

  let offset = 44;
  for (let i = 0; i < length; i++) {
    for (let channel = 0; channel < numChannels; channel++) {
      let sample = channels[channel][i];
      // Clamp sample to [-1, 1]
      sample = Math.max(-1, Math.min(1, sample));
      // Convert to 16-bit signed integer (-32768 to 32767)
      const intSample = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
      view.setInt16(offset, intSample, true);
      offset += 2;
    }
  }

  return new Blob([view], { type: 'audio/wav' });
}

/**
 * Fallback audio extractor using native Web Audio API
 */
export async function extractAudioViaWebAudio(
  file: File,
  onProgress?: (percent: number, stageKey: string) => void
): Promise<{ blob: Blob; duration: number }> {
  if (onProgress) onProgress(20, 'status.writingFs');
  const arrayBuffer = await file.arrayBuffer();

  if (onProgress) onProgress(45, 'status.processing');
  const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
  const audioCtx = new AudioContextClass();

  try {
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
    if (onProgress) onProgress(80, 'status.readingOutput');
    const wavBlob = audioBufferToWav(audioBuffer);
    if (onProgress) onProgress(100, 'status.complete');
    return {
      blob: wavBlob,
      duration: audioBuffer.duration
    };
  } finally {
    audioCtx.close().catch(() => {});
  }
}

