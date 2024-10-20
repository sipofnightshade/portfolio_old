<script lang="ts">
  import SectionHeading from '../SectionHeading.svelte';

  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();
</script>

<section class="relative {className}">
  <div class="container mx-auto flex flex-col gap-8 py-48">
    <SectionHeading
      title="about"
      desc="Just some short notes about myself and my goals."
    />

    <p class="text-7xl font-semibold leading-tight tracking-tight">
      I am a <span class=" bg-brand px-2">Frontend Developer</span> and UI/UX Designer from
      the Caribbean—one of the many small islands. I specialize in crafting intuitive interfaces
      that bridge the gap between technology and everyday life.
    </p>
  </div>
</section>
