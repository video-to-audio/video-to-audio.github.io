import React, { useState, useRef, useCallback, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  UploadCloud,
  FileVideo,
  Music,
  Sliders,
  Download,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Clock,
  HardDrive,
  Check,
  Scissors,
  X
} from 'lucide-react';
import {
  extractVideoMetadata,
  formatBytes,
  formatDuration,
  calculateSpaceSaved,
  type VideoMetadata
} from '../utils/audio-helpers';
import {
  ffmpegExtractor,
  type AudioFormat,
  type AudioBitrate,
  type ExtractionResult
} from '../utils/ffmpeg-extractor';
import { ui, type SupportedLanguage, defaultLang } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';

interface AudioExtractorWorkspaceProps {
  lang: SupportedLanguage;
}

type WorkspaceState = 'IDLE' | 'METADATA_LOADING' | 'CONFIG' | 'PROCESSING' | 'COMPLETED' | 'ERROR';

export default function AudioExtractorWorkspace({ lang }: AudioExtractorWorkspaceProps) {
  const t = useTranslations(lang);

  // Core State
  const [workspaceState, setWorkspaceState] = useState<WorkspaceState>('IDLE');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoMeta, setVideoMeta] = useState<VideoMetadata | null>(null);
  
  // Conversion Settings
  const [format, setFormat] = useState<AudioFormat>('MP3');
  const [bitrate, setBitrate] = useState<AudioBitrate>('320k');
  const [isTrimming, setIsTrimming] = useState<boolean>(false);
  const [trimStart, setTrimStart] = useState<number>(0);
  const [trimEnd, setTrimEnd] = useState<number>(0);

  // Progress & Result
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [statusKey, setStatusKey] = useState<string>('status.init');
  const [result, setResult] = useState<ExtractionResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Drag state
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Audio Player state
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      if (result?.blobUrl) {
        URL.revokeObjectURL(result.blobUrl);
      }
    };
  }, [result]);

  // Handle Video File Selection
  const handleFileSelect = useCallback(async (file: File) => {
    if (!file) return;

    setErrorMessage(null);
    setSelectedFile(file);
    setWorkspaceState('METADATA_LOADING');

    try {
      const meta = await extractVideoMetadata(file);
      setVideoMeta(meta);
      setTrimStart(0);
      setTrimEnd(Math.floor(meta.duration || 0));
      setWorkspaceState('CONFIG');
    } catch (err: any) {
      console.error('Metadata extraction error:', err);
      setErrorMessage(t('error.unsupported'));
      setWorkspaceState('ERROR');
    }
  }, [t]);

  // Drag & Drop Handlers
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      handleFileSelect(file);
    }
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  };

  // Trigger Audio Extraction
  const handleExtractAudio = async () => {
    if (!selectedFile) return;

    setWorkspaceState('PROCESSING');
    setProgressPercent(5);
    setStatusKey('status.init');
    setErrorMessage(null);

    try {
      const extractionOptions = {
        format,
        bitrate,
        trimStart: isTrimming && trimStart > 0 ? trimStart : undefined,
        trimEnd: isTrimming && trimEnd > 0 && trimEnd > trimStart ? trimEnd : undefined
      };

      const res = await ffmpegExtractor.extractAudio(
        selectedFile,
        extractionOptions,
        (percent, stage) => {
          setProgressPercent(percent);
          setStatusKey(stage);
        }
      );

      setResult(res);
      setWorkspaceState('COMPLETED');

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#249D8F', '#E9C46A', '#E76F51', '#2EC4B6']
        });
      } catch (confettiErr) {
        // Safe fallback
      }
    } catch (err: any) {
      console.error('Audio extraction error:', err);
      setErrorMessage(t('error.conversionFailed'));
      setWorkspaceState('ERROR');
    }
  };

  // Reset workspace
  const handleReset = () => {
    if (result?.blobUrl) {
      URL.revokeObjectURL(result.blobUrl);
    }
    setSelectedFile(null);
    setVideoMeta(null);
    setResult(null);
    setProgressPercent(0);
    setErrorMessage(null);
    setIsPlaying(false);
    setWorkspaceState('IDLE');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Audio Player Handlers
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleAudioLoadedMetadata = () => {
    if (audioRef.current) {
      setAudioDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = target;
      setCurrentTime(target);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Download Trigger
  const handleDownload = () => {
    if (!result) return;
    const a = document.createElement('a');
    a.href = result.blobUrl;
    a.download = result.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*,.mp4,.webm,.mov,.mkv,.avi,.flv,.wmv,.m4v,.3gp"
        onChange={onFileInputChange}
        className="hidden"
      />

      {/* ERROR ALERT BANNER */}
      {errorMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 flex items-start justify-between gap-3 animate-in fade-in">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">{t('error.title')}</p>
              <p className="text-xs sm:text-sm mt-0.5">{errorMessage}</p>
            </div>
          </div>
          <button
            onClick={() => setErrorMessage(null)}
            className="p-1 hover:bg-rose-500/20 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STATE 1: IDLE DROPZONE */}
      {workspaceState === 'IDLE' && (
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative group border-2 border-dashed rounded-3xl p-8 sm:p-14 text-center cursor-pointer transition-all duration-300 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm ${
            isDragOver
              ? 'border-brand-teal bg-brand-teal/5 dark:bg-brand-teal/10 scale-[1.01] shadow-2xl shadow-brand-teal/10'
              : 'border-slate-300 dark:border-slate-700 hover:border-brand-teal dark:hover:border-brand-teal hover:shadow-xl'
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-brand-teal/20 via-brand-teal/10 to-brand-ochre/20 dark:from-brand-teal/30 dark:to-brand-ochre/30 flex items-center justify-center border border-brand-teal/30 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              <UploadCloud className="w-10 h-10 text-brand-teal dark:text-brand-teal-light" />
            </div>

            <div className="space-y-1.5 max-w-md">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {isDragOver ? t('dropzone.active') : t('dropzone.title')}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t('dropzone.subtitle')}
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-teal to-brand-teal-dark hover:from-brand-teal-light hover:to-brand-teal text-white font-semibold text-sm shadow-lg shadow-brand-teal/25 hover:shadow-brand-teal/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileVideo className="w-4 h-4" />
                {t('dropzone.btnBrowse')}
              </button>
            </div>

            <p className="text-xs text-slate-400 dark:text-slate-500 pt-2 font-mono">
              {t('dropzone.formats')}
            </p>
          </div>
        </div>
      )}

      {/* STATE 2: ANALYZING METADATA */}
      {workspaceState === 'METADATA_LOADING' && (
        <div className="border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center bg-white dark:bg-slate-900 shadow-md flex flex-col items-center justify-center space-y-4">
          <Loader2 className="w-10 h-10 text-brand-teal animate-spin" />
          <p className="text-base font-semibold text-slate-800 dark:text-slate-200">
            {t('dropzone.processingMeta')}
          </p>
        </div>
      )}

      {/* STATE 3: CONFIGURATION WORKSPACE */}
      {(workspaceState === 'CONFIG' || workspaceState === 'ERROR') && videoMeta && (
        <div className="space-y-6">
          {/* Loaded Video Header Card */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              {videoMeta.thumbnailUrl ? (
                <div className="relative w-24 h-16 sm:w-28 sm:h-18 rounded-2xl overflow-hidden bg-slate-950 flex-shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <img
                    src={videoMeta.thumbnailUrl}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white font-semibold">
                    {videoMeta.formattedDuration}
                  </div>
                </div>
              ) : (
                <div className="w-20 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-200 dark:border-slate-700">
                  <FileVideo className="w-8 h-8 text-brand-teal" />
                </div>
              )}

              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-base text-slate-900 dark:text-white truncate max-w-xs sm:max-w-md" title={videoMeta.fileName}>
                  {videoMeta.fileName}
                </h4>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <span className="flex items-center gap-1">
                    <HardDrive className="w-3.5 h-3.5" />
                    {videoMeta.formattedSize}
                  </span>
                  {videoMeta.duration > 0 && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {videoMeta.formattedDuration}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                {t('preview.change')}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="p-2 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
                title={t('preview.remove')}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Settings Section */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-8">
            {/* Format Selector */}
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Music className="w-4 h-4 text-brand-teal" />
                {t('settings.formatTitle')}
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(['MP3', 'WAV', 'AAC', 'M4A'] as AudioFormat[]).map(f => {
                  const isSelected = format === f;
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFormat(f)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-brand-teal bg-brand-teal/10 dark:bg-brand-teal/20 text-brand-teal dark:text-brand-teal-light shadow-sm ring-2 ring-brand-teal/30'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex items-center justify-between font-black text-lg">
                        <span>{f}</span>
                        {isSelected && <Check className="w-4 h-4 text-brand-teal" />}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                        {f === 'MP3' && 'Universal audio'}
                        {f === 'WAV' && 'Lossless studio'}
                        {f === 'AAC' && 'High efficiency'}
                        {f === 'M4A' && 'Apple optimized'}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bitrate Selector (Only for lossy formats MP3, AAC, M4A) */}
            {format !== 'WAV' ? (
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-brand-ochre-dark dark:text-brand-ochre" />
                  {t('settings.bitrateTitle')}
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {([
                    { rate: '128k', label: '128 kbps', sub: 'Standard' },
                    { rate: '192k', label: '192 kbps', sub: 'High Quality' },
                    { rate: '256k', label: '256 kbps', sub: 'Studio' },
                    { rate: '320k', label: '320 kbps', sub: 'Audiophile HD' }
                  ] as const).map(b => {
                    const isSelected = bitrate === b.rate;
                    return (
                      <button
                        key={b.rate}
                        type="button"
                        onClick={() => setBitrate(b.rate)}
                        className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-brand-ochre-dark dark:border-brand-ochre bg-brand-ochre/15 text-brand-ochre-dark dark:text-brand-ochre ring-2 ring-brand-ochre/30'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/40'
                        }`}
                      >
                        <div className="font-bold text-sm">{b.label}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{b.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-brand-ochre/10 border border-brand-ochre/25 flex items-center gap-3 text-brand-ochre-dark dark:text-brand-ochre">
                <Sparkles className="w-5 h-5 flex-shrink-0" />
                <p className="text-xs sm:text-sm font-medium">
                  {t('settings.bitrateLossless')} - 1411 kbps uncompressed bit-for-bit extraction.
                </p>
              </div>
            )}

            {/* Optional Time Trimmer */}
            {videoMeta.duration > 2 && (
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isTrimming}
                      onChange={e => setIsTrimming(e.target.checked)}
                      className="rounded text-brand-teal focus:ring-brand-teal"
                    />
                    <Scissors className="w-3.5 h-3.5 text-brand-coral" />
                    {t('settings.trimTitle')}
                  </label>
                  {isTrimming && (
                    <span className="text-xs text-brand-coral font-semibold">
                      {formatDuration(trimEnd - trimStart)} segment
                    </span>
                  )}
                </div>

                {isTrimming && (
                  <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 animate-in fade-in">
                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                        {t('settings.trimStart')} (0 - {Math.floor(videoMeta.duration)}s)
                      </label>
                      <input
                        type="number"
                        min="0"
                        max={Math.max(0, trimEnd - 1)}
                        value={trimStart}
                        onChange={e => setTrimStart(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                        {t('settings.trimEnd')} (1 - {Math.floor(videoMeta.duration)}s)
                      </label>
                      <input
                        type="number"
                        min={trimStart + 1}
                        max={Math.floor(videoMeta.duration)}
                        value={trimEnd}
                        onChange={e => setTrimEnd(Math.min(Math.floor(videoMeta.duration), parseInt(e.target.value) || Math.floor(videoMeta.duration)))}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleExtractAudio}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-teal via-brand-teal-light to-brand-ochre text-white font-extrabold text-base shadow-xl shadow-brand-teal/20 hover:shadow-brand-teal/35 hover:scale-[1.01] transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <Music className="w-5 h-5" />
                {t('action.extract')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STATE 4: PROCESSING WITH DYNAMIC PROGRESS BAR */}
      {workspaceState === 'PROCESSING' && (
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-3xl bg-brand-teal/10 dark:bg-brand-teal/20 border border-brand-teal/30 mx-auto flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-brand-teal animate-spin" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {t('action.converting')}
            </h3>
            <p className="text-sm font-mono text-brand-teal dark:text-brand-teal-light animate-pulse">
              {t(statusKey as any)}
            </p>
          </div>

          {/* Progress Bar Container */}
          <div className="space-y-2 max-w-lg mx-auto">
            <div className="w-full h-4 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-teal via-brand-ochre to-brand-coral transition-all duration-300 shadow-sm"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
              <span>{format} ({format === 'WAV' ? 'Lossless' : bitrate})</span>
              <span className="font-bold text-slate-900 dark:text-white">{progressPercent}%</span>
            </div>
          </div>
        </div>
      )}

      {/* STATE 5: COMPLETED WITH AUDIO PLAYER PREVIEW & DOWNLOAD */}
      {workspaceState === 'COMPLETED' && result && selectedFile && (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-6">
            {/* Header / Success Indicator */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t('result.title')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                  {result.fileName} • {formatBytes(result.fileSize)} • {result.format}
                </p>
              </div>
            </div>

            {/* Custom HTML5 Audio Player */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-3">
              <audio
                ref={audioRef}
                src={result.blobUrl}
                onTimeUpdate={handleAudioTimeUpdate}
                onLoadedMetadata={handleAudioLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                className="hidden"
              />

              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={togglePlayPause}
                  className="w-12 h-12 rounded-2xl bg-brand-teal text-white flex items-center justify-center hover:bg-brand-teal-dark transition-colors shadow-md shadow-brand-teal/25 flex-shrink-0 cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Play Preview'}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>

                <div className="flex-1 space-y-1">
                  <input
                    type="range"
                    min="0"
                    max={audioDuration || 100}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full accent-brand-teal cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span>{formatDuration(currentTime)}</span>
                    <span>{formatDuration(audioDuration)}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* File Space Savings Comparison Cards */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">{t('result.originalSize')}</span>
                <span className="text-sm sm:text-base font-extrabold text-slate-700 dark:text-slate-300 font-mono mt-0.5 block">
                  {formatBytes(selectedFile.size)}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-brand-teal/5 dark:bg-brand-teal/10 border border-brand-teal/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal dark:text-brand-teal-light block">{t('result.audioSize')}</span>
                <span className="text-sm sm:text-base font-extrabold text-brand-teal dark:text-brand-teal-light font-mono mt-0.5 block">
                  {formatBytes(result.fileSize)}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-brand-ochre/10 border border-brand-ochre/25">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-ochre-dark dark:text-brand-ochre block">{t('result.spaceSaved')}</span>
                <span className="text-sm sm:text-base font-extrabold text-brand-ochre-dark dark:text-brand-ochre font-mono mt-0.5 block">
                  -{calculateSpaceSaved(selectedFile.size, result.fileSize)}%
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleDownload}
                className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-teal via-brand-teal-light to-brand-ochre text-white font-extrabold text-base shadow-xl shadow-brand-teal/25 hover:shadow-brand-teal/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                {t('result.downloadBtn')}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="py-4 px-6 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                {t('result.convertAnother')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
