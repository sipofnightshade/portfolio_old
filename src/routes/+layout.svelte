<script lang="ts">
  import '../app.css';
  import '@fontsource-variable/onest';
  import 'lenis/dist/lenis.css';
  import { gsap } from 'gsap';
  import { ScrollContainer, type OnSetup, type Lenis } from '$lib/components/LenisScroll';
  import { ModeWatcher } from 'mode-watcher';
  import type { Snippet } from 'svelte';
  import Navbar from '$lib/components/Navbar/Navbar.svelte';
  import ShowBreakpoint from '$lib/components/ShowBreakpoint.svelte';
  import type { LayoutData } from './$types';
  import { fade } from 'svelte/transition';

  let { data, children }: { data: LayoutData; children: Snippet } = $props();

  // lenis
  let lenis = $state<Lenis>();
  const onSetup: OnSetup = ({ lenis: instance }) => {
    lenis = instance;
  };
  $effect(() => {
    // Use GSAP's ticker for Lenis updates instead of autoRaf
    const update = (time: number) => lenis?.raf(time * 800);
    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  // curtains animation
  let transitionContainer: HTMLElement | null = $state(null);
  let firstCurtain: HTMLElement | null = $state(null);
  let secondCurtain: HTMLElement | null = $state(null);

  /**
   * @AnimationSequence
   *  - Curtain 1 slides from y100 to -100
   *  - Curtain 2 slides from y100 to -100, scaleY from 1 to 0
   *  - Logo centered in the middle of the screen
   */

  $effect(() => {
    const tl = gsap.timeline();

    // Reset initial positions
    gsap.set([firstCurtain, secondCurtain], {
      yPercent: 100,
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      zIndex: 99
    });

    // Animation sequence
    tl.to(firstCurtain, {
      yPercent: 0,
      duration: 0.6,
      ease: 'power2.inOut'
    })
      .to(
        secondCurtain,
        {
          yPercent: 0,
          duration: 0.5,
          ease: 'power2.inOut'
        },
        '-=0.3'
      ) // Start 0.4 seconds after first curtain
      .to(firstCurtain, {
        yPercent: -100,
        duration: 0.2,
        ease: 'power2.in',
        stagger: 0.3
      })

      .to(secondCurtain, {
        scaleY: 0,
        yPercent: -100,
        duration: 0.3,
        ease: 'power2.in'
      })
      .set([firstCurtain, secondCurtain], {
        yPercent: 100 // Reset for next transition
      });
  });
</script>

<ShowBreakpoint />
<ModeWatcher />

<ScrollContainer
  {onSetup}
  root
  options={{ smoothWheel: true, orientation: 'vertical', lerp: 0.1 }}
>
  <Navbar url={data.url} />

  <div
    class="bg-surface text-primary dark:bg-surface-d dark:text-primary-d"
    in:fade={{ duration: 600 }}
    out:fade={{ duration: 600 }}
  >
    {@render children()}
  </div>
  {#key data.url}
    <div bind:this={firstCurtain} class="bg-brand dark:bg-brand-d"></div>
    <div bind:this={secondCurtain} class="bg-surface dark:bg-surface-d"></div>
  {/key}
</ScrollContainer>

<style lang="postcss">
  :global(body),
  :global(html) {
    scrollbar-color: theme(colors.muted-d) theme(colors.surface-d);
    scrollbar-width: thin;
  }
</style>
