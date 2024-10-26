<script lang="ts">
  import { setMode, mode } from 'mode-watcher';

  const toggleMode = () => ($mode === 'light' ? setMode('dark') : setMode('light'));

  let background: HTMLDivElement | undefined = $state();
</script>

<button
  class="relative flex h-7 w-20 items-center rounded border-2 border-frame bg-surface-d p-1 text-lg text-primary"
  onclick={toggleMode}
>
  <!-- Sliding background -->
  <div
    bind:this={background}
    class="absolute left-0 top-0 h-full w-1/2 rounded-sm bg-brand transition-all duration-[400ms] ease-in-out dark:bg-brand-d"
    class:translate-x-full={$mode === 'dark'}
  ></div>

  <!-- Button text -->
  <div class="relative z-10 grid w-full grid-cols-2 gap-2 text-[15px] text-surface-d">
    <div
      class="flex items-center justify-center transition-opacity duration-[400ms] ease-out"
      class:opacity-70={$mode === 'dark'}
    >
      <strong class="w-full text-center leading-none">AM</strong>
    </div>
    <div
      class="flex w-full items-center justify-start opacity-0 transition-opacity ease-in"
      class:opacity-70={$mode === 'light'}
      class:opacity-100={$mode === 'dark'}
    >
      <strong class="w-full text-center leading-none">PM</strong>
    </div>
  </div>
</button>

<!-- <button class="text-lg text-primary" onclick={toggleMode}>
  {$mode === 'dark' ? 'AM' : 'PM'}
</button> -->
