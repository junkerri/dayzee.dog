"use client";

import { useState, useRef, useEffect } from "react";

interface NowPlayingProps {
  title: string;
  artist: string;
  audioUrl?: string;
}

export default function NowPlaying({
  title,
  artist,
  audioUrl,
}: NowPlayingProps) {
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

  return (
    <div className="retro-card p-4 max-w-sm mx-auto">
      <div className="text-center mb-3">
        <div className="marquee mb-2">
          <div className="marquee-content">
            <span className="text-pink-600 font-bold">
              🎵 Now Playing: {title} - {artist} 🎵
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={togglePlay}
            className="retro-button px-4 py-2 text-sm"
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <span className="text-xs text-gray-600">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Mini Visualizer */}
      <div className="flex items-end justify-center space-x-1 h-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-gradient-to-t from-pink-400 to-purple-500 rounded-t"
            style={{
              width: "2px",
              height: isPlaying ? `${Math.random() * 20 + 4}px` : "4px",
            }}
          />
        ))}
      </div>

      <audio ref={audioRef} src={audioUrl} preload="metadata" />
    </div>
  );
}
