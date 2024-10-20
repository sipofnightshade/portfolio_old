<script lang="ts">
  import type { PageData } from './$types';

  import Projects from '$lib/components/LandingSections/Projects.svelte';
  import About from '$lib/components/LandingSections/About.svelte';
  import Hero from '$lib/components/LandingSections/Hero.svelte';
  import Contact from '$lib/components/LandingSections/Contact.svelte';
  import InfiniteScrollingBanner from '$lib/components/LandingSections/InfiniteScrollingBanner.svelte';
  import Serivces from '$lib/components/LandingSections/Serivces.svelte';

  let { data }: { data: PageData } = $props();
</script>

<Hero class="z-10" />

<About />

<InfiniteScrollingBanner />

<Projects />

<Serivces />

<Contact class="" />
