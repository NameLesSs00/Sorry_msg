"use client"; 

import { useState, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="music.mp3" loop />
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 px-4 py-2 bg-[#3D3D3D] text-white rounded-full hover:bg-[#2a2a2a] transition"
      >
        {isPlaying ? "Pause Music 🎵" : "Play Music 🎶"}
      </button>
    </>
  );
}
