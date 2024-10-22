<script lang="ts">
  interface Props {
    title: string;
    desc?: string;
  }

  let { title, desc }: Props = $props();
</script>

<div
  class="border--2 container mx-auto mb-16 border-outline bg-none pb-8 pt-64 dark:border-outline-d"
>
  <h1 class="text-7xl font-bold">
    {title}
  </h1>
</div>
