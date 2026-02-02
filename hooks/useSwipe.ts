"use client";

import type { TouchEventHandler } from "react";
import { useRef } from "react";

type SwipeOptions = {
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
};

export function useSwipe({
  onSwipeUp,
  onSwipeDown,
  threshold = 40,
}: SwipeOptions) {
  const startY = useRef<number | null>(null);

  const onTouchStart: TouchEventHandler = (event) => {
    startY.current = event.touches[0]?.clientY ?? null;
  };

  const onTouchEnd: TouchEventHandler = (event) => {
    if (startY.current === null) return;
    const endY = event.changedTouches[0]?.clientY ?? startY.current;
    const delta = startY.current - endY;

    if (delta > threshold) {
      onSwipeUp?.();
    } else if (delta < -threshold) {
      onSwipeDown?.();
    }

    startY.current = null;
  };

  return { onTouchStart, onTouchEnd };
}
