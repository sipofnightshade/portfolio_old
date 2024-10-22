<script lang="ts">
  import { Diamond, Pentagon, Triangle } from '$lib/icons';
  import { gsap } from 'gsap';
  import CornerEdges from './CornerEdges.svelte';
  import { mode } from 'mode-watcher';

  $effect(() => {
    gsap.to('.testing', {
      y: 0,
      duration: 1,
      stagger: 0.15
    });
  });
</script>

<!-- <h1 class="mb-12 w-full flex-col uppercase leading-none">
  <strong
    class="relative -left-1 flex w-full justify-between gap-6 font-semibold tracking-[-0.08em]"
  >
    <span class="testing font-mono relative -left-3.5 translate-y-80">developer</span>
  </strong>
  <strong class="relative -right-1 flex w-full justify-end gap-2 pb-5 font-semibold">
    <span class="testing translate-y-80 pl-1 text-gray-300">and</span>
    <span class="testing relative translate-y-80 text-brand">designer</span>
  </strong>
</h1> -->

<div class="mb-4 w-full text-[176px] font-bold uppercase leading-none tracking-wide">
  <h1 class="w-full flex-col">creating</h1>

  <div class="flex items-center justify-between">
    <!-- control buttons -->
    <div class="flex gap-4">
      <button
        aria-labelledby="svg button"
        class="relative flex h-24 w-24 items-center justify-center"
      >
        <CornerEdges class="h-3 text-frame dark:text-frame-d" />
        <Triangle class="h-[3.25rem] fill-none stroke-primary dark:stroke-primary-d" />
      </button>
      <button
        aria-labelledby="svg button"
        class="relative flex h-24 w-24 items-center justify-center bg-brand dark:bg-brand-d"
      >
        <CornerEdges class="h-3 text-frame dark:text-frame-d" />
        <Pentagon class="h-14 fill-none stroke-primary" />
      </button>
      <button
        aria-labelledby="svg button"
        class="relative flex h-24 w-24 items-center justify-center border-black bg-black dark:bg-zinc-200"
      >
        <CornerEdges class="h-3 text-frame dark:text-frame-d" />
        <Diamond class="h-14 fill-none stroke-primary-d dark:stroke-primary" />
      </button>
    </div>

    <div class="bg-primary px-8 py-2 text-surface dark:bg-primary-d dark:text-surface-d">
      <h1 class="w-full flex-col text-right">seamless</h1>
    </div>
  </div>

  <h1
    class="w-full flex-col"
    class:stroked-text-dark={$mode === 'dark'}
    class:stroked-text-light={$mode === 'light'}
  >
    experiences
  </h1>
</div>

<style lang="postcss">
  h1 {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .stroked-text-light {
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: theme(colors.primary);
    -webkit-text-fill-color: transparent;
  }

  .stroked-text-dark {
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: theme(colors.primary-d);
    -webkit-text-fill-color: transparent;
  }
</style>
