<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import throttle from '$lib/utils/throttle';
  import Menu from './Menu.svelte';
  import Button from './Button.svelte';
  import { fade } from 'svelte/transition';

  let { url }: { url: string } = $props();
  let menu: ReturnType<typeof Menu> | undefined = $state();

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

{#key url}
  <div
    id="navbar"
    in:fade={{ duration: 800, delay: 800 }}
    class="fixed top-0 z-30 flex w-full items-center justify-center"
  >
    <div
      class="container relative flex w-full justify-between py-6 text-xl lg:max-w-none lg:px-12 xl:px-16 2xl:px-20"
    >
      <a href="/" class="text-xl font-bold">Greg.</a>
      <Button handleClick={() => menu?.openMenu()}>Menu</Button>
    </div>
  </div>
{/key}
<Menu bind:this={menu} />
