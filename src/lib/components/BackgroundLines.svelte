<script lang="ts">
</script>

<div class="bg_lines absolute left-0 top-0 -z-10 h-full w-full"></div>

<style lang="postcss">
  .bg_lines {
    --w: 1px; /* Thiclness of the line */
    --n: 3; /* number of lines */
    --c: theme(colors.gray.200);

    background: linear-gradient(90deg, #0000 calc(100% - var(--w)), var(--c) 0);
    background-size: calc(
        (100% - var(--n) * var(--w)) / (var(--n) + 1) + var(--w) + 2 * var(--w)
      )
      100%;
  }
</style>
