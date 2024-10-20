<script lang="ts">
  let { title, desc = '', dark = false } = $props();
</script>

<div class="flex flex-col gap-4 font-bold">
  <h2 class="text-2xl uppercase tracking-wider" class:text-zinc-200={dark}>{title}.</h2>
  {#if desc}
    <div
      class="flex max-w-80 gap-8 border-l-4 bg-brand py-2 pl-2 text-black"
      class:border-black={!dark}
      class:border-zinc-600={dark}
    >
      <p class="leading-tight">{desc}</p>
    </div>
  {/if}
</div>
