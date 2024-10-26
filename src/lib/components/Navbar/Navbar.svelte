<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import throttle from '$lib/utils/throttle';
  import Button from './Button.svelte';
  import Menu from './Menu.svelte';

  let isOpen = $state(false);

  const toggleMenu = () => (isOpen = !isOpen);

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
  <div class="relative flex w-full justify-between px-20 py-6 text-xl">
    <a href="/" class="text-xl font-bold">Greg.</a>

    <Menu />
  </div>
</div>
