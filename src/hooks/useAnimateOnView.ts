"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateOnViewOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Returns a ref and a boolean `isVisible`.
 * isVisible resets to false when the element leaves the viewport,
 * so entering again re-triggers the animation.
 */
export function useAnimateOnView<T extends Element = HTMLDivElement>(
  options: AnimateOnViewOptions = {}
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? "0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
}
