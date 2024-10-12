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
  <section
    class="container relative mx-auto flex h-[92svh] w-screen flex-col justify-between"
  >
    <BackgroundLines />
    <Navbar />
    <HeroHeader />
  </section>

  <!-- about -->
  <section class="h-screen bg-neutral-950">
    <div class="container mx-auto grid h-full grid-cols-2 gap-2 py-40">
      <SubHeading
        title="about."
        desc="Just some short notes about myself and my goals."
      />
      <div class="text-4xl font-bold leading-snug text-gray-200">
        <p>
          I am a Frontend Developer and UI/UX Designer from the Caribbean—one of the many
          small islands. I specialize in crafting intuitive interfaces that bridge the gap
          between technology and everyday life.
        </p>
        <br />
        <p>
          My aim is always to design solutions that seamlessly integrate into people's
          lives, regardless of their technical background.
        </p>
      </div>
    </div>
  </section>

  <!-- work -->
  <Projects />

  <!-- orange -->
  <section class="h-screen bg-brand">
    <div class="container mx-auto flex h-full flex-col justify-center">
      <div class="font-bold">
        <p class="text-8xl leading-tight">
          Okay, that's enough about me. It's time to talk about you. Got a project in
          mind? Let's bring it to life together!
        </p>
      </div>
    </div>
  </section>

  <section class="h-screen bg-neutral-950">
    <div class="container mx-auto flex h-full flex-col justify-between pb-0 pt-40">
      <div class="grid h-full grid-cols-2 gap-2">
        <SubHeading title="contact." desc="Let's get to work!" />
        <ContactForm />
      </div>
      <Footer />
    </div>
  </section>
</ScrollContainer>
