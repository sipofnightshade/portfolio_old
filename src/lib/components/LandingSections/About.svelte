<script lang="ts">
  import SectionHeading from '../SectionHeading.svelte';

  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();
</script>

<section class="relative mt-20 bg-overlay dark:bg-overlay-d {className}">
  <div class="container mx-auto flex flex-col gap-4 py-28 md:py-40 lg:gap-8">
    <SectionHeading title="about" />

    <p
      class="xs:text-3xl text-2xl font-semibold !leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
    >
      I am a Frontend Developer and UI/UX Designer from the Caribbean—one of the many
      small islands. I specialize in crafting intuitive interfaces that bridge the gap
      between technology and everyday life.
    </p>
  </div>
</section>
