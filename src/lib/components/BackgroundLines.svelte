<script lang="ts">
  let { dark = false } = $props();
</script>

{#if dark}
  <div
    class="bg_lines_dark absolute left-0 top-0 -z-10 h-full w-full border-x border-zinc-900"
  ></div>
{:else}
  <div
    class="bg_lines_light absolute left-0 top-0 -z-10 h-full w-full border-x border-gray-200"
  ></div>
{/if}

<style lang="postcss">
  .bg_lines_light {
    --w: 1px; /* Thiclness of the line */
    --n: 3; /* number of lines */
    --c: theme(colors.gray.200);

    background: linear-gradient(90deg, #0000 calc(100% - var(--w)), var(--c) 0);
    background-size: calc(
        (100% - var(--n) * var(--w)) / (var(--n) + 1) + var(--w) + 2 * var(--w)
      )
      100%;
  }

  .bg_lines_dark {
    --w: 1px; /* Thiclness of the line */
    --n: 3; /* number of lines */
    --c: theme(colors.zinc.900);

    background: linear-gradient(90deg, #0000 calc(100% - var(--w)), var(--c) 0);
    background-size: calc(
        (100% - var(--n) * var(--w)) / (var(--n) + 1) + var(--w) + 2 * var(--w)
      )
      100%;
  }
</style>
