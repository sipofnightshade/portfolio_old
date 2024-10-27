<script lang="ts">
  import { page } from '$app/stores';
  import Footer from '../Footer.svelte';
  import gsap from 'gsap';
  import Button from './Button.svelte';
  import ToggleTheme from './ToggleTheme.svelte';
  import Diamond from '$lib/icons/Diamond.svelte';
  import { updateIndicator } from './updateIndicator.svelte';
  import { menuItems } from './data';
  import { on } from 'svelte/events';

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

  $effect(() => {
    $page.route.id;
    activeContainer = document.querySelector('[data-active="true"]');
  });

  function calcOffset(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return rect.top + rect.height / 2;
  }

  const offsetY = $derived.by(() => {
    if (activeContainer) {
      return calcOffset(activeContainer);
    }
    return 0;
  });

  function openMenu() {
    if (!menuTimeline) return;
    menuTimeline.play();
  }

  function closeMenu() {
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

  $effect(() => {
    if (menuTimeline) {
      menuTimeline.play();
    }
  });
</script>

<!-- Trigger button for the menu -->
<Button class="static z-40" handleClick={openMenu}>Menu</Button>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="fixed inset-0 z-30 h-screen w-screen overflow-hidden bg-black/20 opacity-0"
  bind:this={overlay}
  onclick={closeMenu}
></div>

<div
  class="fixed right-0 top-0 z-50 flex h-screen w-screen translate-x-full flex-col justify-between overflow-hidden bg-brand pt-[30px] lg:w-1/2 dark:bg-brand-d"
  bind:this={menu}
>
  <!-- active link indicators-->
  <div
    class="absolute left-0 top-0 -z-10 flex h-fit w-full items-center transition-transform"
    use:updateIndicator={() => offsetY}
    class:hidden={offsetY <= 0}
  >
    <div
      bind:this={activeLinkDash}
      class="h-3 w-6 -translate-x-full bg-surface dark:bg-surface-d"
    ></div>
    <div
      bind:this={activeLinkPolygon}
      class="pointer-events-none absolute -right-60 translate-x-1/2"
    >
      <Diamond class="h-96 fill-none stroke-surface dark:stroke-surface-d" />
    </div>
  </div>

  <div bind:this={menuContent} class="flex h-full flex-col justify-between opacity-0">
    <div class="flex justify-between px-20">
      <ToggleTheme />
      <Button class="[&>span]:text-primary" handleClick={closeMenu}>Close</Button>
    </div>
    <nav class="mt-20 flex flex-col gap-4" bind:this={navLinks}>
      {#each menuItems as item, i}
        <div
          class="relative flex items-center border-primary px-20"
          data-active={$page.url.pathname === item.href ? 'true' : 'false'}
        >
          <a
            href={item.href}
            class="text-[112px] font-bold uppercase leading-none tracking-wide text-primary"
            class:activeRoute={$page.route.id === item.href}
            onclick={closeMenu}
          >
            {item.label}
          </a>
        </div>
      {/each}
    </nav>
    <div bind:this={footerElement} class="opacity-0">
      <Footer class="*>text-xl px-20 text-primary" />
    </div>
  </div>
</div>

<style lang="postcss">
  .activeRoute {
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: theme(colors.primary);
    -webkit-text-fill-color: transparent;
  }

  @media (width <= 768px) {
    .activeRoute {
      -webkit-text-stroke-width: 2px;
    }
  }

  @media (width <= 360px) {
    .activeRoute {
      -webkit-text-stroke-width: 1px;
    }
  }
</style>
