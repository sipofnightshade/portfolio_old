<script lang="ts">
  import { gsap } from 'gsap';
  import { mode } from 'mode-watcher';
  import ControlButton from './ControlButton.svelte';

  $effect(() => {
    gsap.to('.testing', {
      y: 0,
      duration: 1,
      stagger: 0.15
    });
  });
</script>

<div class="mb-4 w-full text-[176px] font-bold uppercase leading-none tracking-wide">
  <h1 class="w-full flex-col">creating</h1>

  <div class="flex items-center justify-between">
    <!-- control buttons -->
    <div class="flex gap-4">
      <ControlButton type="tri" state="empty" />
      <ControlButton type="pent" state="correct" />
      <ControlButton type="dia" state="incorrect" />
    </div>

    <div class="bg-primary px-8 py-2 text-surface dark:bg-primary-d dark:text-surface-d">
      <h1 class="w-full flex-col text-right">seamless</h1>
    </div>
  </div>

  <h1
    class="w-full flex-col"
    class:stroked-text-dark={$mode === 'dark'}
    class:stroked-text-light={$mode === 'light'}
  >
    experiences
  </h1>
</div>

<style lang="postcss">
  h1 {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .stroked-text-light {
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: theme(colors.primary);
    -webkit-text-fill-color: transparent;
  }

  .stroked-text-dark {
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: theme(colors.primary-d);
    -webkit-text-fill-color: transparent;
  }
</style>
