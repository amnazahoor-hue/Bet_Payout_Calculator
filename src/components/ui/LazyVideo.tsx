"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  className?: string;
  preload?: "none" | "metadata" | "auto";
  ariaHidden?: boolean;
  playbackRate?: number;
  loop?: boolean;
  eager?: boolean;
  rootMargin?: string;
};

export default function LazyVideo({
  src,
  className,
  preload = "metadata",
  ariaHidden = true,
  playbackRate = 1,
  loop = true,
  eager = false,
  rootMargin = "320px 0px",
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);

  useEffect(() => {
    if (eager) {
      setShouldLoad(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager, rootMargin]);

  const applyPlayback = useCallback(
    (video: HTMLVideoElement) => {
      video.playbackRate = playbackRate;
      video.defaultPlaybackRate = playbackRate;
      void video.play().catch(() => {});
    },
    [playbackRate]
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    applyPlayback(video);
    const onCanPlay = () => applyPlayback(video);
    video.addEventListener("canplay", onCanPlay, { once: true });

    return () => {
      video.removeEventListener("canplay", onCanPlay);
    };
  }, [shouldLoad, src, applyPlayback]);

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          key={src}
          autoPlay
          loop={loop}
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
