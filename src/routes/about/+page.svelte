<script lang="ts">
  import Heading from '$lib/components/Heading.svelte';
  import Contact from '$lib/components/LandingSections/Contact.svelte';
  import InfiniteScrollingBanner from '$lib/components/LandingSections/InfiniteScrollingBanner.svelte';
  import Serivces from '$lib/components/LandingSections/Serivces.svelte';
  import { fade } from 'svelte/transition';
  import type { PageData } from './$types';

  interface Props {}

  let { data }: { data: PageData } = $props();
  let uniqueKey = Date.now();
</script>

<Heading title="Who I am." />

{#key uniqueKey}
  <div
    class="container mx-auto pb-40 pt-8"
    in:fade={{ delay: 1800, duration: 1600 }}
    out:fade={{ duration: 600 }}
  >
    <p class="text-6xl leading-tight">
      Hi, I’m Gregory, a full-stack developer and UI/UX designer from the Caribbean.
      Growing up on a small island shaped my approach to problem-solving and creativity. I
      enjoy turning ideas into functional, well-designed digital experiences that are
      simple and effective.
    </p>
  </div>
{/key}

<InfiniteScrollingBanner />
<div class="py-40">
  <div class="container mx-auto">
    <p class="text-6xl leading-tight">
      I design simple, intuitive interfaces and build scalable applications using open
      source tools like Appwrite and Pocketbase. Whether it's frontend or backend, I focus
      on creating solutions that are practical, reliable, and easy to use.
    </p>
  </div>
</div>
<Serivces />
<Contact />
