<script lang="ts">
  let { title, desc = '', dark = false } = $props();
</script>

{#if !dark}
  <div class="flex flex-col gap-3 lg:gap-4">
    <h2 class="text-lg font-bold uppercase tracking-wider lg:text-2xl dark:text-brand-d">
      {title}.
    </h2>
    {#if desc}
      <div
        class="flex max-w-80 gap-8 border-l-4 border-outline bg-overlay py-2 pl-2 dark:border-outline-d dark:bg-overlay-d"
      >
        <p class="text-sm font-semibold leading-tight lg:text-base">{desc}</p>
      </div>
    {/if}
  </div>
{:else}
  <div class="flex flex-col gap-3 lg:gap-4">
    <h2 class="text-lg font-bold uppercase tracking-wider text-brand-d lg:text-2xl">
      {title}.
    </h2>
    {#if desc}
      <div
        class="flex max-w-80 gap-8 border-l-4 border-frame-d bg-overlay-d py-2 pl-2 text-primary-d"
      >
        <p class="text-sm font-semibold leading-tight lg:text-base">{desc}</p>
      </div>
    {/if}
  </div>
{/if}
