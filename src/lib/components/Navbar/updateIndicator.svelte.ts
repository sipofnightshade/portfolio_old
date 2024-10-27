import type { Action } from 'svelte/action';
import { on } from 'svelte/events';

export const updateIndicator: Action<HTMLElement, () => number> = (
  node,
  offset: () => number
) => {
  function updatePosition() {
    node.style.transform = `translateY(${offset()}px)`;
  }

  $effect(() => {
    updatePosition();
    return on(window, 'resize', updatePosition);
  });
};
