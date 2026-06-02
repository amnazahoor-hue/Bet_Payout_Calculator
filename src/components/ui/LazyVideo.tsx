"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const LOOP_EPSILON = 0.12;

type LazyVideoProps = {
  src: string;
  className?: string;
  preload?: "none" | "metadata" | "auto";
  ariaHidden?: boolean;
  playbackRate?: number;
  seamlessLoop?: boolean;
};

export default function LazyVideo({
  src,
  className,
  preload = "none",
  ariaHidden = true,
  playbackRate = 1,
  seamlessLoop = false,
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const applyPlayback = useCallback(
    (video: HTMLVideoElement) => {
      video.playbackRate = playbackRate;
      video.defaultPlaybackRate = playbackRate;
      void video.play().catch(() => {});
    },
    [playbackRate]
  );

  const seekToLoopStart = useCallback((video: HTMLVideoElement) => {
    if (video.readyState >= 1) {
      video.currentTime = 0.001;
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    applyPlayback(video);

    const onLoaded = () => applyPlayback(video);

    const onTimeUpdate = () => {
      if (!seamlessLoop || !Number.isFinite(video.duration) || video.duration <= 0) return;
      if (video.currentTime >= video.duration - LOOP_EPSILON) {
        seekToLoopStart(video);
      }
    };

    const onEnded = () => {
      if (!seamlessLoop) return;
      seekToLoopStart(video);
      applyPlayback(video);
    };

    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, [shouldLoad, seamlessLoop, applyPlayback, seekToLoopStart]);

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          autoPlay
          loop={!seamlessLoop}
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          preload={preload}
          aria-hidden={ariaHidden}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
