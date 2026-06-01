"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  className?: string;
  preload?: "none" | "metadata";
  ariaHidden?: boolean;
};

export default function LazyVideo({
  src,
  className,
  preload = "none",
  ariaHidden = true,
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <video
          autoPlay
          loop
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
