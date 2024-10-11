<script lang="ts">
  import '../app.css';
  import '@fontsource-variable/overpass-mono';
  import '@fontsource-variable/onest';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<div class="text-black">
  {@render children()}
</div>
