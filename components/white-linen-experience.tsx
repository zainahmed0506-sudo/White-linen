"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { LandingSections } from "./landing-sections";
import { projectImages } from "./project-images";

const TIMING = {
  outlineDelay: 280,
  outlineDuration: 1200,
  outlineHold: 220,
  revealDuration: 1400,
  carouselInterval: 6200,
  slideDuration: 560,
} as const;

type Stage = "opening" | "transitioning" | "hero";
type Direction = "next" | "previous";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`wordmark${compact ? " wordmark--compact" : ""}`} aria-label="White Linen Interiors">
      <span className="wordmark-main">White Linen</span>
      <span className="wordmark-sub">Interiors</span>
    </div>
  );
}

function outlinePath(progress: number) {
  const distance = Math.min(Math.max(progress, 0), 1) * 4;
  const coordinate = (value: number) => Math.round(value * 1000) / 1000;

  if (distance <= 1) return `M 1 1 H ${coordinate(1 + 98 * distance)}`;
  if (distance <= 2) return `M 1 1 H 99 V ${coordinate(1 + 98 * (distance - 1))}`;
  if (distance <= 3) return `M 1 1 H 99 V 99 H ${coordinate(99 - 98 * (distance - 2))}`;
  return `M 1 1 H 99 V 99 H 1 V ${coordinate(99 - 98 * (distance - 3))}`;
}

function AnimatedOutline() {
  const path = useRef<SVGPathElement>(null);

  useEffect(() => {
    let frame = 0;
    let start: number | undefined;
    const delay = window.setTimeout(() => {
      const draw = (now: number) => {
        if (start === undefined) start = now;
        const progress = Math.min((now - start) / TIMING.outlineDuration, 1);
        path.current?.setAttribute("d", outlinePath(progress));
        if (progress < 1) frame = window.requestAnimationFrame(draw);
      };
      frame = window.requestAnimationFrame(draw);
    }, TIMING.outlineDelay);

    return () => {
      window.clearTimeout(delay);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <svg className="opening-outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path ref={path} d={outlinePath(0)} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function LineArrow({ direction }: { direction: Direction }) {
  const path = direction === "next" ? "M2 12h54M47 4l8 8-8 8" : "M58 12H4M13 4l-8 8 8 8";
  return (
    <svg viewBox="0 0 60 24" aria-hidden="true" focusable="false">
      <path d={path} />
    </svg>
  );
}

function ProjectCarousel({ enabled, reducedMotion }: { enabled: boolean; reducedMotion: boolean }) {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [direction, setDirection] = useState<Direction>("next");
  const [nextReady, setNextReady] = useState(true);
  const autoplayTimer = useRef<number | null>(null);
  const transitionTimer = useRef<number | null>(null);
  const currentRef = useRef(0);
  const transitionRef = useRef(false);

  const nextIndex = (current + 1) % projectImages.length;

  const clearTimers = useCallback(() => {
    if (autoplayTimer.current !== null) window.clearTimeout(autoplayTimer.current);
    if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
  }, []);

  const changeSlide = useCallback((next: number, nextDirection: Direction) => {
    if (transitionRef.current || next === currentRef.current) return;
    transitionRef.current = true;
    setDirection(nextDirection);
    setPrevious(currentRef.current);
    currentRef.current = next;
    setCurrent(next);
    if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(() => {
      setPrevious(null);
      transitionRef.current = false;
    }, TIMING.slideDuration);
  }, []);

  useEffect(() => {
    const preload = new window.Image();
    preload.src = projectImages[nextIndex].src;
    const markReady = () => setNextReady(true);
    setNextReady(false);
    preload.onload = markReady;
    preload.onerror = markReady;
    if (preload.complete) markReady();
  }, [nextIndex]);

  useEffect(() => {
    if (!enabled || reducedMotion) return;

    const scheduleAutoplay = () => {
      if (autoplayTimer.current !== null) window.clearTimeout(autoplayTimer.current);
      if (document.hidden) return;
      autoplayTimer.current = window.setTimeout(() => {
        if (nextReady && !document.hidden) changeSlide(nextIndex, "next");
      }, TIMING.carouselInterval);
    };

    document.addEventListener("visibilitychange", scheduleAutoplay);
    scheduleAutoplay();
    return () => {
      document.removeEventListener("visibilitychange", scheduleAutoplay);
      if (autoplayTimer.current !== null) window.clearTimeout(autoplayTimer.current);
    };
  }, [changeSlide, enabled, nextIndex, nextReady, reducedMotion]);

  useEffect(() => clearTimers, [clearTimers]);

  const move = (nextDirection: Direction) => {
    if (!enabled) return;
    if (autoplayTimer.current !== null) window.clearTimeout(autoplayTimer.current);
    const next = nextDirection === "next"
      ? (currentRef.current + 1) % projectImages.length
      : (currentRef.current - 1 + projectImages.length) % projectImages.length;
    changeSlide(next, nextDirection);
  };

  return (
    <section className="project-hero" aria-label="Completed project images">
      <div className="project-frame">
        {previous !== null && (
          <Image
            className={`carousel-image carousel-image--leaving carousel-image--${direction}`}
            src={projectImages[previous].src}
            alt=""
            fill
            sizes="100vw"
            style={{ objectPosition: projectImages[previous].objectPosition }}
          />
        )}
        <Image
          key={current}
          className={`carousel-image${previous !== null && !reducedMotion ? ` carousel-image--entering carousel-image--${direction}` : ""}`}
          src={projectImages[current].src}
          alt={projectImages[current].alt}
          fill
          priority={current === 0}
          sizes="100vw"
          style={{ objectPosition: projectImages[current].objectPosition }}
        />
        <div className="carousel-controls" role="group" aria-label="Project image controls">
          <button type="button" className="line-control" onClick={() => move("previous")} aria-label="Previous project image">
            <LineArrow direction="previous" />
          </button>
          <button type="button" className="line-control" onClick={() => move("next")} aria-label="Next project image">
            <LineArrow direction="next" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function WhiteLinenExperience() {
  const reducedMotion = useReducedMotion();
  const [stage, setStage] = useState<Stage>("opening");
  const [hasScrolled, setHasScrolled] = useState(false);
  const firstImageReady = useRef(false);
  const scrollState = useRef(false);

  useEffect(() => {
    const image = new window.Image();
    image.src = projectImages[0].src;
    const ready = () => { firstImageReady.current = true; };
    image.onload = ready;
    image.onerror = ready;
    if (image.complete) ready();
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setStage("hero");
      return;
    }

    const originalOverflow = document.body.style.overflow;
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    let imageWaitTimer: number | undefined;
    let settleTimer: number | undefined;
    const startReveal = () => {
      if (!firstImageReady.current) {
        imageWaitTimer = window.setTimeout(startReveal, 80);
        return;
      }
      setStage("transitioning");
      settleTimer = window.setTimeout(() => {
        window.scrollTo(0, 0);
        scrollState.current = false;
        setHasScrolled(false);
        setStage("hero");
        document.body.style.overflow = originalOverflow;
      }, TIMING.revealDuration);
    };
    const outlineTimer = window.setTimeout(startReveal, TIMING.outlineDelay + TIMING.outlineDuration + TIMING.outlineHold);

    return () => {
      window.clearTimeout(outlineTimer);
      if (imageWaitTimer) window.clearTimeout(imageWaitTimer);
      if (settleTimer) window.clearTimeout(settleTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (stage !== "hero") return;

    let frame = 0;
    const updateNavbar = () => {
      frame = 0;
      const nextValue = window.scrollY > 12;
      if (nextValue !== scrollState.current) {
        scrollState.current = nextValue;
        setHasScrolled(nextValue);
      }
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNavbar);
    };

    updateNavbar();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [stage]);

  const heroIsReady = stage === "hero";

  return (
    <main className={`white-linen-experience stage-${stage}`}>
      <header className={`final-navbar${heroIsReady ? " final-navbar--visible" : ""}${hasScrolled ? " final-navbar--scrolled" : ""}`} aria-hidden={!heroIsReady}>
        <div className="final-navbar__surface" aria-hidden="true" />
        <a className="navbar-link navbar-link--left" href="#about">About</a>
        <a className="final-navbar__brand" href="#top" aria-label="White Linen Interiors home"><Logo compact /></a>
        <a className="navbar-link navbar-link--right" href="#contact">Contact</a>
      </header>
      <div className="opening-canvas" aria-hidden={stage === "hero"}>
        <div className="opening-brand">
          <Logo />
        </div>
        <div className="opening-mark"><AnimatedOutline /></div>
      </div>
      <div className="hero-layer">
        <ProjectCarousel enabled={heroIsReady} reducedMotion={reducedMotion} />
      </div>
      <LandingSections />
    </main>
  );
}
