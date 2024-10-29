import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export function verticalSlide(
  node: HTMLElement,
  { delay = 0, duration = 400 } = {}
): TransitionConfig {
  const bottom = -100;

  return {
    delay: delay,
    duration: duration,
    easing: cubicOut,
    css: (t) => `transform: translateY(${(1 - t) * bottom}vh);`
  };
}
