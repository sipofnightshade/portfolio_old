<script lang="ts">
  import HeroHeader from '../HeroHeader.svelte';
  import Navbar from '../Navbar.svelte';

  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();
</script>

<section class="relative {className}">
  <div class="container relative mx-auto flex h-screen w-screen flex-col justify-between">
    <Navbar />
    <HeroHeader />
  </div>
</section>
