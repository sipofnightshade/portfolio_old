<script lang="ts">
  import SplitType from 'split-type';
  import { textReveal } from '$lib/animations/textReveal';

  let { title }: { title: string } = $props();

  $effect(() => {
    const text = new SplitType('h1', { types: 'words,chars' });
    if (!text.words) return;
    textReveal(text.words, { stagger: 0.2 });
  });
</script>

<div class="container mx-auto mb-16 flex flex-col gap-8 pb-8 pt-64">
  <h1 class="text-7xl font-bold">
    {title}
  </h1>
  <!-- <div class="h-1 w-full bg-outline dark:bg-outline-d">
    <div class="h-1 w-1/5 bg-brand dark:bg-brand-d"></div>
  </div> -->
</div>

<style>
  h1 {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
</style>
