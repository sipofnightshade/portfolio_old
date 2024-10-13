<script lang="ts">
  import BackgroundLines from '../BackgroundLines.svelte';
  import HeroHeader from '../HeroHeader.svelte';
  import Navbar from '../Navbar.svelte';

  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();
</script>

<section class="relative {className}">
  <div
    class="container relative mx-auto flex h-[92svh] w-screen flex-col justify-between"
  >
    <BackgroundLines />
    <Navbar />
    <HeroHeader />
  </div>
</section>
