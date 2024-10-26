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

  let { children }: { children: Snippet } = $props();

  let lenis = $state<Lenis>();

  const onSetup: OnSetup = ({ lenis: instance }) => {
    lenis = instance;
  };

  // Effect for tying GSAP and Lenis together
  $effect(() => {
    // Use GSAP's ticker for Lenis updates instead of autoRaf
    function update(time: number) {
      lenis?.raf(time * 800);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });
</script>

<ShowBreakpoint />
<ModeWatcher />
<div class="bg-surface text-primary dark:bg-surface-d dark:text-primary-d">
  <ScrollContainer
    {onSetup}
    root
    options={{ smoothWheel: true, orientation: 'vertical', lerp: 0.1 }}
  >
    <Navbar />

    {@render children()}
  </ScrollContainer>
</div>

<style lang="postcss">
  :global(body),
  :global(html) {
    scrollbar-color: theme(colors.muted-d) theme(colors.surface-d);
    scrollbar-width: thin;
  }
</style>
