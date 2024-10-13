<script lang="ts">
  import type { PageData } from './$types';
  import Footer from '../lib/components/Footer.svelte';
  import BackgroundLines from '$lib/components/BackgroundLines.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import HeroHeader from '$lib/components/HeroHeader.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import SubHeading from '$lib/components/SubHeading.svelte';
  import Link from '$lib/icons/Link.svelte';
  // animation
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { ScrollContainer, type OnSetup, type Lenis } from '$lib/components/LenisScroll';
  import Projects from '$lib/components/LandingSections/Projects.svelte';
  import About from '$lib/components/LandingSections/About.svelte';
  import Hero from '$lib/components/LandingSections/Hero.svelte';
  import Pitch from '$lib/components/LandingSections/Pitch.svelte';
  import Contact from '$lib/components/LandingSections/Contact.svelte';

  let { data }: { data: PageData } = $props();

  let lenis = $state<Lenis>();

  const onSetup: OnSetup = ({ lenis: instance }) => {
    lenis = instance;
  };

  // Effect for tying GSAP and Lenis together
  $effect(() => {
    // Use GSAP's ticker for Lenis updates instead of autoRaf
    function update(time: number) {
      lenis?.raf(time * 950);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });
</script>

<ScrollContainer
  {onSetup}
  root
  options={{ smoothWheel: true, orientation: 'vertical', lerp: 0.1 }}
>
  <Hero class="z-10 bg-zinc-50" />

  <About class="h-[108vh] bg-neutral-950 text-gray-200" />

  <Projects class="z-10 bg-white" />

  <Pitch class="z-10 bg-brand" />

  <Contact class="bg-neutral-950" />
</ScrollContainer>
