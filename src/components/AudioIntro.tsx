"use client";

import { useState, useRef, useEffect } from "react";

interface AudioIntroProps {
  audioUrl?: string;
  title?: string;
}

export default function AudioIntro({
  audioUrl,
  title = "Dayzee's Voice Intro",
}: AudioIntroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="retro-card p-6 max-w-md mx-auto">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-pink-600 neon-text mb-2">
          {title} 🎤
        </h3>
        <div className="sparkle">
          <span className="text-sm text-gray-600">Click to hear my voice!</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Audio Controls */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={togglePlay}
            className="retro-button px-6 py-3 text-lg"
          >
            {isPlaying ? "⏸️ Pause" : "▶️ Play"}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-purple-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Waveform Visualization */}
        <div className="flex items-end justify-center space-x-1 h-16">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-pink-400 to-purple-500 rounded-t"
              style={{
                width: "3px",
                height: isPlaying ? `${Math.random() * 40 + 10}px` : "8px",
              }}
            />
          ))}
        </div>
      </div>

      <audio ref={audioRef} src={audioUrl} preload="metadata" />
    </div>
  );
}
