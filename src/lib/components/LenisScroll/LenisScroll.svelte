<script lang="ts">
  import Lenis from 'lenis';
  import type { LenisProps } from './types';

  let {
    children,
    root = false,
    options = {},
    autoRaf = false,
    class: className,
    props,
    onSetup = () => {}
  }: LenisProps = $props();

  let wrapper = $state<HTMLDivElement>();
  let content = $state<HTMLDivElement>();

  $effect(() => {
    const lenis = new Lenis({
      ...options,
      ...(!root && {
        wrapper,
        content
      })
    });
    let rafId: number;

    // If autoRaf is enabled, continuously update Lenis on each animation frame
    if (autoRaf) {
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    onSetup({ lenis, wrapper, content });

    // Clean up the animation frame and destroy Lenis on component unmount
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  });
</script>

{#if root}
  {@render children?.()}
{:else}
  <div bind:this={wrapper} class={className} {...props}>
    <div bind:this={content}>{@render children?.()}</div>
  </div>
{/if}
