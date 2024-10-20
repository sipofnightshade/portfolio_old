<script lang="ts">
  import { Diamond, Pentagon, Triangle } from '$lib/icons';
  import { gsap } from 'gsap';
  import CornerEdges from './CornerEdges.svelte';

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

<div class="mb-4 w-full text-[12rem] font-bold uppercase leading-none tracking-wide">
  <h1 class="w-full flex-col">creating</h1>

  <div class="flex items-center justify-between">
    <!-- control buttons -->

    <div class="flex gap-4">
      <button
        aria-labelledby="svg button"
        class="borer-2 relative flex h-24 w-24 items-center justify-center border-black bg-black"
      >
        <CornerEdges />
        <Diamond class="h-14 fill-none stroke-zinc-100" />
      </button>
      <button
        aria-labelledby="svg button"
        class="bordr-2 relative flex h-24 w-24 items-center justify-center border-black bg-brand"
      >
        <CornerEdges />
        <Pentagon class="h-14 fill-none stroke-black" />
      </button>
      <button
        aria-labelledby="svg button"
        class="bordr-2 relative flex h-24 w-24 items-center justify-center border-black"
      >
        <CornerEdges />
        <Triangle class="h-[3.25rem] fill-none stroke-black" />
      </button>
    </div>

    <div class="bg-black px-8 py-2 text-zinc-100">
      <h1 class="w-full flex-col text-right">seamless</h1>
    </div>
  </div>

  <h1 class="stroked-text w-full flex-col">experiences</h1>
</div>

<style>
  h1 {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .stroked-text {
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: black;
    -webkit-text-fill-color: transparent;
  }
</style>
