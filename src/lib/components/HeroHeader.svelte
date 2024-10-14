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

<h1 class="mb-12 w-full flex-col leading-none">
  <strong
    class="relative -left-1 flex w-full justify-between gap-6 text-[15.5rem] font-semibold tracking-[-0.08em]"
  >
    <span class="testing relative -left-3.5 translate-y-80 font-mono">developer</span>
  </strong>
  <strong
    class="relative -right-1 flex w-full justify-end gap-2 pb-5 text-[15rem] font-semibold"
  >
    <span class="testing translate-y-80 pl-1 text-gray-300">and</span>
    <span class="testing relative translate-y-80 text-brand">designer</span>
  </strong>
</h1>

<style>
  strong {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
</style>
