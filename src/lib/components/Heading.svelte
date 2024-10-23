<script lang="ts">
  interface Props {
    title: string;
    desc?: string;
  }

  let { title, desc }: Props = $props();
</script>

<div class="container mx-auto mb-16 flex flex-col gap-8 pb-8 pt-64">
  <h1 class="text-7xl font-bold">
    {title}
  </h1>

  <div class="h-1 w-full bg-outline dark:bg-outline-d">
    <div class="h-1 w-1/5 bg-brand dark:bg-brand-d"></div>
  </div>
</div>
