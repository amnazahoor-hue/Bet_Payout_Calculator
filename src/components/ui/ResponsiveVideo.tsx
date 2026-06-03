"use client";

import { useEffect, useRef } from "react";

const MOBILE_QUERY = "(max-width: 767px)";

type ResponsiveVideoProps = {
  desktopSrc: string;
  mobileSrc: string;
  className?: string;
  videoClassName?: string;
  ariaLabel?: string;
  onError?: () => void;
};

function isMobileViewport() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function prepareVideo(video: HTMLVideoElement, shouldPlay: boolean) {
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.loop = true;
  video.playbackRate = 1;
  video.defaultPlaybackRate = 1;

  if (!shouldPlay) {
    video.pause();
    return;
  }

  const start = () => {
    if (video.paused) {
      void video.play().catch(() => {});
    }
  };

  if (video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
    start();
    return;
  }

  video.addEventListener("canplaythrough", start, { once: true });
}

export default function ResponsiveVideo({
  desktopSrc,
  mobileSrc,
  className,
  videoClassName,
  ariaLabel,
  onError,
}: ResponsiveVideoProps) {
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const syncPlayback = () => {
      const isMobile = isMobileViewport();
      const desktop = desktopRef.current;
      const mobile = mobileRef.current;

      if (desktop) {
        desktop.preload = isMobile ? "none" : "auto";
      }

      if (mobile) {
        if (isMobile) {
          mobile.preload = "auto";
          if (mobile.readyState === 0) {
            mobile.load();
          }
        } else {
          mobile.preload = "none";
        }
      }

      if (desktop) {
        prepareVideo(desktop, !isMobile);
      }

      if (mobile) {
        prepareVideo(mobile, isMobile);
      }
    };

    syncPlayback();

    const media = window.matchMedia(MOBILE_QUERY);
    media.addEventListener("change", syncPlayback);
    return () => media.removeEventListener("change", syncPlayback);
  }, [desktopSrc, mobileSrc]);

  const baseClass = `responsive-video ${videoClassName ?? ""}`.trim();
  const ariaProps = ariaLabel
    ? { "aria-label": ariaLabel }
    : { "aria-hidden": true as const };

  const sharedProps = {
    muted: true,
    playsInline: true,
    loop: true,
    controls: false as const,
    disablePictureInPicture: true,
    controlsList: "nodownload nofullscreen noremoteplayback",
    onError,
  };

  return (
    <div className={className}>
      <video
        ref={desktopRef}
        className={`${baseClass} responsive-video--desktop`.trim()}
        preload="auto"
        {...sharedProps}
        {...ariaProps}
      >
        <source src={desktopSrc} type="video/mp4" />
      </video>
      <video
        ref={mobileRef}
        className={`${baseClass} responsive-video--mobile`.trim()}
        preload="none"
        {...sharedProps}
        {...ariaProps}
      >
        <source src={mobileSrc} type="video/mp4" />
      </video>
    </div>
  );
}
