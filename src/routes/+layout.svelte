<script>
  import '../app.css';
  import '@fontsource-variable/overpass-mono';
  import '@fontsource-variable/onest';

  let { children } = $props();
</script>

<div class="text-black">
  {@render children()}
</div>
