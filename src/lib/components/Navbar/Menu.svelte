<script lang="ts">
  import { page } from '$app/stores';
  import Footer from '../Footer.svelte';
  import gsap from 'gsap';
  import Button from './Button.svelte';
  import ToggleTheme from './ToggleTheme.svelte';

  let menu: HTMLDivElement | null = $state(null);
  let overlay: HTMLDivElement | null = $state(null);
  let menuContent: HTMLDivElement | null = $state(null);
  let navLinks: HTMLElement | null = $state(null);
  let footerElement: HTMLElement | null = $state(null);
  let menuTimeline: gsap.core.Timeline | null = $state(null);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
  ];

  function openMenu() {
    if (!menuTimeline) return;
    document.body.classList.add('no-scroll'); // Disable scrolling
    menuTimeline.play();
  }

  function closeMenu() {
    if (!menuTimeline) return;
    menuTimeline.reverse();
    menuTimeline.eventCallback('onReverseComplete', () => {
      document.body.classList.remove('no-scroll'); // Re-enable scrolling after animation
    });
  }

  $effect(() => {
    if (!menu || !overlay || !menuContent || !navLinks || !footerElement) return;

    if (!menuTimeline) {
      const tl = gsap
        .timeline({
          paused: true,
          onReverseComplete: () => {
            overlay = null;
            menu = null;
            menuContent = null;
            navLinks = null;
            footerElement = null;
          }
        })
        .fromTo(
          [menu, menuContent],
          { x: '100%' },
          { x: '0%', duration: 0.55, ease: 'power3.out' }
        )
        .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 0)
        .fromTo(
          navLinks.children,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, stagger: 0.04, duration: 0.3 },
          '-=0.3'
        )
        .fromTo(
          footerElement,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.3 },
          '-=0.3'
        );

      menuTimeline = tl;
    }
  });
</script>

<!-- Trigger button for the menu -->
<Button class="static z-40" handleClick={openMenu}>Menu</Button>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="fixed inset-0 z-30 h-screen w-screen overflow-hidden bg-surface-d/60 opacity-0"
  bind:this={overlay}
  onclick={closeMenu}
></div>

<div
  class="fixed right-0 top-0 z-50 flex h-screen w-screen translate-x-full flex-col justify-between overflow-hidden bg-brand px-20 pt-[30px] lg:w-1/2 dark:bg-brand-d"
  bind:this={menu}
>
  <div
    bind:this={menuContent}
    class="flex h-full translate-x-full flex-col justify-between"
  >
    <div class="flex justify-between">
      <ToggleTheme />
      <Button class="[&>span]:text-primary" handleClick={closeMenu}>Close</Button>
    </div>
    <nav class="mt-20 flex flex-col gap-4" bind:this={navLinks}>
      {#each menuItems as item}
        <a
          href={item.href}
          class="text-[112px] font-bold uppercase leading-none tracking-wide text-primary underline-offset-8"
          class:underline={item.href === $page.route.id}
          onclick={closeMenu}
        >
          {item.label}
        </a>
      {/each}
    </nav>
    <div bind:this={footerElement} class="opacity-0">
      <Footer class="*>text-xl text-primary" />
    </div>
  </div>
</div>
