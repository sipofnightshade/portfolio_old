<script lang="ts">
  import { page } from '$app/stores';
  import Footer from '../Footer.svelte';
  import gsap from 'gsap';
  import Button from './Button.svelte';
  import ToggleTheme from './ToggleTheme.svelte';
  import Diamond from '$lib/icons/Diamond.svelte';
  import { updateIndicator } from './updateIndicator.svelte';
  import { menuItems } from './data';
  import { MediaQuery } from 'runed';
  import { mode } from 'mode-watcher';

  const screenLg = new MediaQuery('(min-width: 1024px)');

  // refs
  let menu: HTMLDivElement | null = $state(null);
  let overlay: HTMLDivElement | null = $state(null);
  let menuContent: HTMLDivElement | null = $state(null);
  let navLinks: HTMLElement | null = $state(null);
  let activeLinkDash: HTMLDivElement | null = $state(null);
  let activeLinkPolygon: HTMLDivElement | null = $state(null);
  let footerElement: HTMLElement | null = $state(null);
  let menuTimeline: gsap.core.Timeline | null = $state(null);

  let activeContainer: HTMLElement | null = $state(null);
  let innerWidth = $state(0);
  let innerHeight = $state(0);

  $effect(() => {
    $page.route.id;
    activeContainer = document.querySelector('[data-active="true"]');
  });

  const offsetY = $derived.by(() => {
    if (activeContainer && innerWidth > 0 && innerHeight > 0) {
      const rect = activeContainer.getBoundingClientRect();
      return rect.top + rect.height / 2 - 8; // the -8 is to center the indicator perfectly
    }
    return 0;
  });

  export function openMenu() {
    if (!menuTimeline) return;
    menuTimeline.play();
  }

  export function closeMenu() {
    if (!menuTimeline) return;
    menuTimeline.reverse(0.58);
  }

  $effect(() => {
    if (!menu || !overlay || !menuContent || !navLinks || !footerElement) return;

    // Create menu timeline
    if (!menuTimeline) {
      menuTimeline = gsap
        .timeline({
          paused: true
        })
        .fromTo(menu, { x: '100%' }, { x: '0%', duration: 0.46, ease: 'power2.inOut' })
        .fromTo(
          menuContent,
          { opacity: 0 },
          { opacity: 1, duration: 0.46, ease: 'power2.inOut' },
          '-=0.4'
        )
        .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 0)
        .fromTo(
          navLinks.children,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, stagger: 0.04, duration: 0.4 },
          '-=0.25'
        )
        .fromTo(footerElement, { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.3')
        .fromTo(
          activeLinkDash,
          { x: '-100%' },
          {
            x: 0,
            duration: 0.5,
            ease: 'power2.out'
          },
          '-=0.3'
        )
        .fromTo(
          activeLinkPolygon,
          { x: '50%' },
          {
            x: 0,
            duration: 0.5,
            ease: 'power2.out'
          },
          '-=0.3'
        );
    }
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="fixed inset-0 z-30 h-screen w-screen overflow-hidden bg-black/20 opacity-0"
  bind:this={overlay}
  onclick={closeMenu}
></div>

<div
  class="fixed right-0 top-0 z-50 flex h-screen w-screen translate-x-full flex-col justify-between overflow-hidden bg-brand pt-6 lg:w-2/3 2xl:w-1/2 dark:bg-brand-d"
  bind:this={menu}
>
  <!-- active link indicators-->
  <div
    class="absolute left-0 top-0 -z-10 flex h-fit w-full items-center transition-transform"
    use:updateIndicator={() => offsetY}
  >
    <div
      bind:this={activeLinkDash}
      class="h-3 w-1 -translate-x-full bg-surface nn:w-4 md:w-6 dark:bg-surface-d"
    ></div>
    <div
      bind:this={activeLinkPolygon}
      class="pointer-events-none absolute -right-12 translate-x-1/2 nn:-right-16 xs:-right-20 sm:-right-36 md:-right-44 lg:-right-24 xl:-right-40 2xl:-right-32"
    >
      <Diamond
        class="h-24 fill-none stroke-surface nn:h-32 sm:h-60 md:h-72 lg:h-44 xl:h-60  dark:stroke-surface-d"
      />
    </div>
  </div>

  <div
    bind:this={menuContent}
    class="flex h-full flex-col justify-between opacity-0"
    class:container={!screenLg.matches}
  >
    <div class="flex justify-between lg:px-12 xl:px-16 2xl:px-20">
      <ToggleTheme />
      <Button class="[&>span]:text-primary" handleClick={closeMenu}>Close</Button>
    </div>
    <nav class="mt-20 flex flex-col gap-4" bind:this={navLinks}>
      {#each menuItems as item, i}
        <div
          class="relative flex items-center border-primary lg:px-12 xl:px-16 2xl:px-20"
          data-active={$page.url.pathname === item.href ? 'true' : 'false'}
        >
          <a
            href={item.href}
            class="text-5xl font-bold uppercase leading-none tracking-wide xs:text-7xl sm:text-8xl md:text-8xl 2xl:text-[116px] 2xl:tracking-wide {$page
              .route.id === item.href
              ? $mode === 'light'
                ? 'active-fill'
                : 'active-fill-d'
              : 'text-primary'}"
            class:activeRoute={$page.route.id === item.href}
            onclick={closeMenu}
          >
            {item.label}
          </a>
        </div>
      {/each}
    </nav>
    <div bind:this={footerElement} class="opacity-0">
      <Footer class="*>text-xl text-primary lg:px-12 xl:px-16 2xl:px-20" />
    </div>
  </div>
</div>

<style lang="postcss">
  .activeRoute {
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: theme(colors.primary);
  }

  .active-fill {
    -webkit-text-fill-color: theme(colors.brand);
  }

  .active-fill-d {
    -webkit-text-fill-color: theme(colors.brand-d);
  }

  @media (width <= 768px) {
    .activeRoute {
      -webkit-text-stroke-width: 2px;
    }
  }

  @media (width <= 460px) {
    .activeRoute {
      -webkit-text-stroke-width: 1.5px;
    }
  }
</style>
