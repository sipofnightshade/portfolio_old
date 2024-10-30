<script lang="ts">
  import { gsap } from 'gsap';
  import { mode } from 'mode-watcher';
  import SplitType from 'split-type';
  import ControlButton from './ControlButton.svelte';
  import { textReveal } from '$lib/animations/textReveal';

  $effect(() => {
    const text = new SplitType('h1', { types: 'words,chars' });

    gsap.set('#seamlessBG', { opacity: 0, xPercent: 5 });

    textReveal(text.chars);
    textReveal('button');

    gsap.to('#seamlessBG', {
      opacity: 1,
      xPercent: 0,
      duration: 2.8,
      delay: 0.2,
      easing: 'power3.in'
    });
  });
</script>

<div
  class="mb-4 w-full space-y-1 text-5xl font-bold uppercase leading-none xs:text-6xl sm:text-[84px] md:text-[102px] lg:text-[136px] xl:text-[156px] 2xl:text-[186px] 2xl:tracking-wide"
>
  <h1 class="split w-full flex-col">creating</h1>

  <div class="flex items-center justify-between">
    <!-- control buttons -->
    <div
      class="controls absolute bottom-72 right-2 flex flex-col gap-2 md:bottom-96 lg:static lg:flex-row xl:gap-4"
    >
      <ControlButton type="tri" state="empty" />
      <ControlButton type="pent" state="correct" />
      <ControlButton type="dia" state="incorrect" />
    </div>

    <div class="relative p-2 text-surface dark:text-surface-d">
      <div
        id="seamlessBG"
        class="absolute inset-0 h-full w-full bg-primary opacity-0 dark:bg-primary-d"
      ></div>
      <h1 class="w-full flex-col text-right lg:tracking-tighter xl:tracking-normal">
        seamless
      </h1>
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
  h1,
  .controls {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    line-height: 1;
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

  @media (width <= 1280px) {
    .stroked-text-light {
      -webkit-text-stroke-width: 2px;
    }

    .stroked-text-dark {
      -webkit-text-stroke-width: 2px;
    }
  }
</style>
