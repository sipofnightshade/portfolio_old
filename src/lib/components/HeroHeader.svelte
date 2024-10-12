<script lang="ts">
  import { gsap } from 'gsap';

  $effect(() => {
    gsap.to('.testing', {
      y: 0,
      duration: 1,
      stagger: 0.15
    });
  });
</script>

<h1 class=" mb-12 w-full flex-col text-[16rem] leading-none">
  <strong
    class="relative -left-1 flex w-full justify-between gap-6 font-semibold tracking-tighter"
  >
    <span class="testing relative -left-3.5 translate-y-80 font-mono">developer</span>
  </strong>
  <strong class="relative -right-1 flex w-full justify-between gap-6 pb-5 font-semibold">
    <span class="testing relative -left-3.5 translate-y-80 text-gray-300">and</span>
    <span class="testing relative translate-y-80 text-brand">designer</span>
  </strong>
</h1>

<style>
  strong {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
</style>
