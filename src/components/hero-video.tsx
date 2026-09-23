"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { photos } from "@/lib/photos";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 0.8;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      if (preference.matches) video.pause();
      else void video.play().catch(() => setPlaying(false));
    };
    syncMotion();
    preference.addEventListener("change", syncMotion);
    return () => preference.removeEventListener("change", syncMotion);
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={photos.heroBurrito.src}
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 size-full object-cover object-center"
      >
        <source src="/videos/apresentacao.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        aria-label={playing ? "Pausar vídeo de apresentação" : "Reproduzir vídeo de apresentação"}
        onClick={() => {
          const video = videoRef.current;
          if (!video) return;
          if (video.paused) void video.play().catch(() => setPlaying(false));
          else video.pause();
        }}
        className="absolute bottom-5 right-5 z-20 flex min-h-11 items-center gap-2.5 rounded-full border border-background/40 bg-foreground/65 px-4 py-2.5 text-[0.65rem] font-bold text-background backdrop-blur transition hover:bg-foreground focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-accent md:bottom-8 md:right-16"
      >
        {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
        {playing ? "Pausar vídeo" : "Reproduzir vídeo"}
      </button>
    </>
  );
}
