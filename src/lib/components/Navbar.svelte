<script lang="ts">
  import { setMode, mode } from 'mode-watcher';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import throttle from '$lib/utils/throttle';

  function handleModeChange() {
    if ($mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  $effect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const showAnim = gsap
      .from('#navbar', {
        yPercent: -100,
        paused: true,
        duration: 0.54,
        delay: 0.4,
        ease: 'power1.inOut'
      })
      .progress(1);

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      scrub: true,
      onUpdate: throttle((self: any) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      }, 100)
    });
  });
</script>

<div id="navbar" class="fixed top-0 z-50 flex w-full items-center justify-center">
  <div class="container flex w-full justify-between py-3 text-xl">
    <a href="/" class="text-2xl font-bold mix-blend-screen">Greg.</a>
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
</div>
