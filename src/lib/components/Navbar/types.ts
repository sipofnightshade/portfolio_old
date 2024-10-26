import type { Snippet } from 'svelte';

export interface ButtonProps {
  handleClick: () => void;
  children: Snippet;
  class?: string;
}
