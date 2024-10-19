<script lang="ts">
  import '../app.css';
  import '@fontsource-variable/plus-jakarta-sans';
  import 'lenis/dist/lenis.css';
  import { gsap } from 'gsap';
  import { ScrollContainer, type OnSetup, type Lenis } from '$lib/components/LenisScroll';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();

  let lenis = $state<Lenis>();

  const onSetup: OnSetup = ({ lenis: instance }) => {
    lenis = instance;
  };

  // Effect for tying GSAP and Lenis together
  $effect(() => {
    // Use GSAP's ticker for Lenis updates instead of autoRaf
    function update(time: number) {
      lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });
</script>

<div class="bg-zinc-50 text-black">
  <ScrollContainer
    {onSetup}
    root
    options={{ smoothWheel: true, orientation: 'vertical', lerp: 0.1 }}
  >
    {@render children()}
  </ScrollContainer>
</div>
