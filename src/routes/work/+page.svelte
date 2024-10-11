<script lang="ts">
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<h1>This is a list of my work!</h1>

{#each data.projects as project}
  <p>{project.name}</p>
{/each}
