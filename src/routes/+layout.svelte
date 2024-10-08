<script>
  import '../app.css';

  let { children } = $props();
</script>

<div class="container relative mx-auto w-screen">
  {@render children()}
</div>
