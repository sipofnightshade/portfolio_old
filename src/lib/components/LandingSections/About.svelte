<script lang="ts">
  import SubHeading from '../SubHeading.svelte';

  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();
</script>

<section class="relative {className}">
  <div class="container mx-auto grid h-full grid-cols-2 gap-2 py-48">
    <SubHeading title="about." desc="Just some short notes about myself and my goals." />
    <div class="text-4xl font-bold leading-snug">
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
