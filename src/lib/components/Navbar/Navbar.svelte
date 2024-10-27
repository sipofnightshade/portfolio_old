<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import throttle from '$lib/utils/throttle';
  import Menu from './Menu.svelte';
  import { MediaQuery } from 'runed';

  const screenLg = new MediaQuery('(min-width: 1024px)');

  $effect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const showAnim = gsap
      .from('#navbar', {
        yPercent: -100,
        paused: true,
        duration: 0.54,
        delay: 0.4,
        ease: 'power1.inOut'
      })
      .progress(1);

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      scrub: true,
      onUpdate: throttle((self: any) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      }, 100)
    });
  });
</script>

<div id="navbar" class="fixed top-0 z-30 flex w-full items-center justify-center">
  <div
    class="relative flex w-full justify-between py-6 text-xl lg:px-12 xl:px-16 2xl:px-20"
    class:container={!screenLg.matches}
  >
    <a href="/" class="text-xl font-bold">Greg.</a>

    <Menu />
  </div>
</div>
