<script lang="ts">
  import Heading from '$lib/components/Heading.svelte';
  import Contact from '$lib/components/LandingSections/Contact.svelte';
  import InfiniteScrollingBanner from '$lib/components/LandingSections/InfiniteScrollingBanner.svelte';
  import Serivces from '$lib/components/LandingSections/Serivces.svelte';

  interface Props {}

  let {}: Props = $props();
</script>

<Heading title="Who I am." />

<div class="container mx-auto pb-40 pt-16">
  <p class="text-7xl font-semibold leading-tight tracking-tight">
    I am a Frontend Developer and UI/UX Designer from the Caribbean—one of the many small
    islands. I specialize in crafting intuitive interfaces that bridge the gap between
    technology and everyday life.
  </p>
</div>
<InfiniteScrollingBanner />
<Serivces />
<Contact />
