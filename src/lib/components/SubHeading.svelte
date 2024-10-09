<script lang="ts">
  let { title, desc, dark = true } = $props();
</script>

<div class="flex flex-col gap-2">
  <h2
    class="mt-10 text-9xl font-bold leading-tight"
    class:text-gray-200={dark}
    class:text-black={!dark}
  >
    {title}
  </h2>
  <div class="flex gap-8">
    <div
      class="mt-2 h-1.5 w-14 bg-white"
      class:bg-white={dark}
      class:bg-black={!dark}
    ></div>
    <p
      class="max-w-80 font-mono text-lg font-bold leading-snug"
      class:text-gray-400={dark}
      class:text-black={!dark}
    >
      {desc}
    </p>
  </div>
</div>
