<script lang="ts">
  import SectionHeading from '../SectionHeading.svelte';

  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();
</script>

<section class="relative mt-20 bg-zinc-200 dark:bg-inherit {className}">
  <div class="container mx-auto flex flex-col gap-8 py-44">
    <SectionHeading title="about" />

    <p class="text-7xl font-semibold leading-tight tracking-tight">
      I am a Frontend Developer and UI/UX Designer from the Caribbean—one of the many
      small islands. I specialize in crafting intuitive interfaces that bridge the gap
      between technology and everyday life.
    </p>
  </div>
</section>
