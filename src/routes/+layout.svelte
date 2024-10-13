<script lang="ts">
  import '../app.css';
  import '@fontsource-variable/overpass-mono';
  import '@fontsource-variable/onest';
  import 'lenis/dist/lenis.css';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<div class="bg-zinc-50 text-black">
  {@render children()}
</div>
