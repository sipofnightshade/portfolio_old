<script lang="ts">
  import type { PageData } from './$types';

  import Projects from '$lib/components/LandingSections/Projects.svelte';
  import About from '$lib/components/LandingSections/About.svelte';
  import Hero from '$lib/components/LandingSections/Hero.svelte';
  import Pitch from '$lib/components/LandingSections/Pitch.svelte';
  import Contact from '$lib/components/LandingSections/Contact.svelte';

  let { data }: { data: PageData } = $props();
</script>

<Hero class="z-10 bg-zinc-50" />

<About class="h-[108vh] bg-neutral-950 text-gray-200" />

<Projects class="z-10 bg-white" />

<Pitch class="z-10 bg-brand" />

<Contact class="bg-neutral-950" />
