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

<section class="h-svh bg-black">
  <div class="container mx-auto grid grid-cols-2 py-40">
    <SubHeading title="about." desc="Just some short notes about myself and my goals." />
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
