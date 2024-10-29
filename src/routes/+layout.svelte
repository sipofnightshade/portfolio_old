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
  import { verticalSlide } from '$lib/animations/veticalSlide';

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
</script>

<ShowBreakpoint />
<ModeWatcher />

<ScrollContainer
  {onSetup}
  root
  options={{ smoothWheel: true, orientation: 'vertical', lerp: 0.1 }}
>
  <Navbar url={data.url} />

  <div class="bg-surface text-primary dark:bg-surface-d dark:text-primary-d">
    {@render children()}
  </div>

  {#key data.url}
    <div
      class="fixed -bottom-[100vh] left-0 z-[998] h-screen w-screen bg-brand dark:bg-brand-d"
      out:verticalSlide={{ duration: 500 }}
    ></div>
    <div
      class="fixed -bottom-[100vh] left-0 z-[999] h-screen w-screen bg-surface dark:bg-surface-d"
      out:verticalSlide={{ duration: 500, delay: 200 }}
    ></div>
  {/key}
</ScrollContainer>

<style lang="postcss">
  :global(body),
  :global(html) {
    scrollbar-color: theme(colors.muted-d) theme(colors.surface-d);
    scrollbar-width: thin;
  }
</style>
