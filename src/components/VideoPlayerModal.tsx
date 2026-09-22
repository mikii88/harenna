import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Languages,
  Film,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { VideoItem, HARENNA_VIDEOS, harennaLogo } from '../data/harennaData';
import { natureAudio } from '../utils/audioSynth';

interface VideoPlayerModalProps {
  video: VideoItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectOtherVideo: (video: VideoItem) => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  isOpen,
  onClose,
  onSelectOtherVideo
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      setCurrentTime(0);
    } else {
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [isOpen, video?.id]);

  useEffect(() => {
    if (isPlaying && video) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= video.durationSeconds) {
            return 0; // Loop seamlessly
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, video]);

  if (!isOpen || !video) return null;

  const progressPercent = (currentTime / video.durationSeconds) * 100;
  const otherVideo = HARENNA_VIDEOS.find((v) => v.id !== video.id);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSec = Math.round((parseFloat(e.target.value) / 100) * video.durationSeconds);
    setCurrentTime(newSec);
  };

  const handleToggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      natureAudio.start();
    } else {
      natureAudio.stop();
    }
  };

  return (
    <div
      id="video-player-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-800 bg-stone-950/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white p-0.5 border border-emerald-500/80 shrink-0">
              <img
                src={harennaLogo}
                alt="Harenna Logo"
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 font-mono">
                Field Documentation Reel • Bale Mountains
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white font-display truncate max-w-md">
                {video.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content: Video Canvas + Sidebar Info */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Video Player Column */}
          <div className="md:col-span-7 bg-black flex flex-col justify-center items-center p-3 sm:p-5 relative select-none">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl group bg-stone-950 flex flex-col justify-between">
              {/* Background Video Frame / Simulation */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={video.poster}
                  alt={video.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isPlaying ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-90'
                  }`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
              </div>

              {/* On-frame Top Badge */}
              <div className="relative z-10 p-3 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-emerald-300 border border-emerald-500/30">
                  <Film className="w-3 h-3 text-emerald-400" />
                  <span>Real Field Footage</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-stone-300 border border-stone-800">
                  {formatTime(currentTime)} / {video.duration}
                </span>
              </div>

              {/* Center Play/Pause Trigger */}
              <div
                className="relative z-10 self-center flex items-center justify-center cursor-pointer"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {!isPlaying && (
                  <div className="w-16 h-16 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl backdrop-blur-xs transition-transform transform hover:scale-110">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                )}
              </div>

              {/* On-Frame Authentic Subtitles */}
              <div className="relative z-10 p-4 space-y-2">
                {showSubtitles && (video.afanOromoText || video.amharicText) && (
                  <div className="bg-black/75 backdrop-blur-md p-3 rounded-xl border border-stone-700/60 shadow-lg space-y-1 animate-fadeIn text-center">
                    {video.afanOromoText && (
                      <p className="text-xs sm:text-sm font-bold text-amber-200 tracking-wide font-sans">
                        "{video.afanOromoText}"
                      </p>
                    )}
                    {video.amharicText && (
                      <p className="text-xs sm:text-sm font-semibold text-stone-100 font-sans">
                        "{video.amharicText}"
                      </p>
                    )}
                    {video.englishTranslation && (
                      <p className="text-[11px] text-emerald-300/90 italic pt-0.5 border-t border-stone-700/50">
                        {video.englishTranslation}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Video Control Bar below Player */}
            <div className="w-full max-w-[340px] mt-3 space-y-2">
              {/* Progress Slider */}
              <div className="flex items-center gap-2 text-[11px] font-mono text-stone-400">
                <span>{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progressPercent}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <span>{video.duration}</span>
              </div>

              {/* Bottom Buttons */}
              <div className="flex items-center justify-between text-xs text-stone-300 pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-white transition-colors cursor-pointer"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setCurrentTime(0)}
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
                    title="Replay from start"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleToggleSound}
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      !isMuted
                        ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-600'
                        : 'bg-stone-800 hover:bg-stone-700 text-stone-400'
                    }`}
                    title={isMuted ? 'Turn Sound On' : 'Mute'}
                  >
                    {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowSubtitles(!showSubtitles)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors cursor-pointer ${
                      showSubtitles
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                        : 'bg-stone-800 text-stone-400 border-stone-700'
                    }`}
                  >
                    CC
                  </button>
                  <span className="text-[10px] text-stone-500 font-mono">Looping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Conservation Context Column */}
          <div className="md:col-span-5 p-5 sm:p-6 bg-stone-900 flex flex-col justify-between space-y-6 border-t md:border-t-0 md:border-l border-stone-800">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-900/50 text-emerald-300 border border-emerald-700/60">
                  <Sparkles className="w-3 h-3" />
                  Field Story &amp; Cultural Legacy
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-display text-white">
                  {video.title}
                </h4>
                <p className="text-xs text-stone-400">{video.subtitle}</p>
              </div>

              {/* Location and Info */}
              <div className="p-3 bg-stone-950/60 rounded-xl border border-stone-800 space-y-2 text-xs text-stone-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Location:</strong> {video.location}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Duration:</strong> {video.duration} • Documented by {video.recordedBy}
                  </span>
                </div>
              </div>

              {/* Documentary Description */}
              <div className="space-y-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
                <h5 className="font-semibold text-stone-200 text-xs uppercase tracking-wider">
                  Field Context
                </h5>
                <p>{video.description}</p>
              </div>

              {/* Conservation Significance */}
              <div className="p-3.5 bg-emerald-950/30 rounded-xl border border-emerald-800/40 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 uppercase tracking-wide">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Conservation Significance
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {video.conservationSignificance}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {video.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-stone-800 text-stone-400 border border-stone-700"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Switch to Other Video Button */}
            {otherVideo && (
              <div className="pt-4 border-t border-stone-800">
                <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
                  Next Field Video:
                </div>
                <button
                  onClick={() => onSelectOtherVideo(otherVideo)}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-800 text-left transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-14 rounded-lg overflow-hidden shrink-0 relative bg-black">
                      <img
                        src={otherVideo.poster}
                        alt={otherVideo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="w-4 h-4 fill-white text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                        {otherVideo.title}
                      </div>
                      <div className="text-[11px] text-stone-400 line-clamp-1">
                        {otherVideo.duration} • {otherVideo.tags[0]}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-emerald-400 transition-colors" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-stone-800 bg-stone-950 flex items-center justify-between text-xs text-stone-400">
          <span>Harenna Forest Heritage • Indigenous Environmental Documentation</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Video
          </button>
        </div>
      </div>
    </div>
  );
};
