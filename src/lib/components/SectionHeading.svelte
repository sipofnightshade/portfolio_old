<script lang="ts">
  let { title, desc = '', class: className } = $props();
</script>

<div class="flex flex-col gap-4 {className}">
  <h2 class="text-2xl font-bold uppercase tracking-wider dark:text-brand-d">
    {title}.
  </h2>
  {#if desc}
    <div
      class=" flex max-w-80 gap-8 border-l-4 border-outline bg-overlay py-2 pl-2 dark:border-outline-d dark:bg-overlay-d"
    >
      <p class="font-semibold leading-tight">{desc}</p>
    </div>
  {/if}
</div>
