<script lang="ts">
  interface Props {
    title: string;
    desc?: string;
  }

  let { title, desc }: Props = $props();
</script>

<div class="mt-64">
  <h1 class="">
    {title}
  </h1>
</div>
