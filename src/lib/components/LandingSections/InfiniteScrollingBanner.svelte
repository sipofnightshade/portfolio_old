<script lang="ts">
  const tools = [
    'Svelte',
    'Tailwind',
    'Appwrite',
    'GSAP',
    'Figma',
    'TypeScript',
    'Pocketbase'
  ];
</script>

<div
  class="flex h-48 items-center justify-center gap-6 bg-black stroke-brand font-semibold uppercase text-brand"
>
  {#each tools as tool}
    <span class="text-5xl">{tool}</span>
  {/each}
</div>
