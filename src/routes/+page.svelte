<script lang="ts">
  import BackgroundLines from '$lib/components/BackgroundLines.svelte';
  import HeroHeader from '$lib/components/HeroHeader.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import SubHeading from '$lib/components/SubHeading.svelte';
</script>

<section
  class="container relative mx-auto flex h-[92svh] w-screen flex-col justify-between"
>
  <BackgroundLines />
  <Navbar />
  <HeroHeader />
</section>
