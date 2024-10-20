<script lang="ts">
  import Corner from '$lib/icons/Corner.svelte';
  let { strokeWidth = 2, class: className = 'h-3' } = $props();
</script>

<Corner class="absolute right-0 top-0 z-10 {className}" {strokeWidth} />
<Corner class="absolute bottom-0 right-0 z-10 rotate-90 {className}" {strokeWidth} />
<Corner class="absolute bottom-0 left-0 z-10 rotate-180 {className}" {strokeWidth} />
<Corner class="absolute left-0 top-0 z-10 -rotate-90 {className}" {strokeWidth} />
