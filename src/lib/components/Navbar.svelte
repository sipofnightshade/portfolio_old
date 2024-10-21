<script lang="ts">
  import { setMode, mode } from 'mode-watcher';

  function handleModeChange() {
    if ($mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }
</script>

<div class="flex w-full justify-between py-5 text-xl">
  <a href="/" class="text-2xl font-bold">Greg.</a>
  <nav class="flex items-center gap-9 text-lg font-semibold">
    <button onclick={handleModeChange}>{$mode === 'dark' ? 'AM' : 'PM'}</button>

    <a href="/about">About</a>
    <a href="/work">Projects</a>

    <a
      href="/mailto:info@gregorymcmillan.me"
      class="border-2 border-frame bg-brand px-4 py-2 leading-none text-primary dark:border-brand-d dark:bg-brand-d"
      >Let's talk!</a
    >
  </nav>
</div>
