<script lang="ts">
  let { strokeWidth = 2, class: className = '' } = $props();
</script>

<svg viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class={className}>
  <path d="M0 1H8V9" stroke="currentColor" stroke-width={strokeWidth} />
</svg>
