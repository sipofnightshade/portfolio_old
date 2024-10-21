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
  class="flex h-48 items-center justify-center gap-6 bg-surface-d stroke-brand-d font-semibold uppercase text-brand-d dark:bg-brand-d dark:stroke-primary dark:text-primary"
>
  {#each tools as tool}
    <span class="text-5xl">{tool}</span>
  {/each}
</div>
