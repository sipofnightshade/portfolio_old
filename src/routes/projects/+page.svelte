<script lang="ts">
  import Heading from '$lib/components/Heading.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Heading title="Projects" />

{#each data.projects as project}
  <p>{project.name}</p>
{/each}
