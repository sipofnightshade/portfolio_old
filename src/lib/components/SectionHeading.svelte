<script lang="ts">
  let { title, desc = '' } = $props();
</script>

<div class="flex flex-col gap-4 font-bold">
  <h2 class="text-2xl uppercase tracking-wider">{title}.</h2>
  {#if desc}
    <div class="flex max-w-80 gap-8 border-l-4 border-black bg-brand py-2 pl-2">
      <p class="leading-tight">{desc}</p>
    </div>
  {/if}
</div>
