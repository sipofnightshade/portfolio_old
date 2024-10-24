<script lang="ts">
  import { horizontalLoop } from '$lib/animations/horizontalLoop';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  let loop: any = $state(null);

  $effect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const boxes = gsap.utils.toArray('#horizontalScroller li');

    // Initialize the loop with autoplay
    loop = horizontalLoop(boxes, {
      speed: 0.5, // Adjust speed if needed
      repeat: -1, // Infinite loop
      paused: false, // Autoplay immediately
      reversed: false, // Forward direction
      snap: 1, // Optional for smoother snapping
      scrub: 1 // Smooth scrubbing
    });

    // Create a ScrollTrigger to detect scroll direction and reverse animation
    ScrollTrigger.create({
      trigger: '#horizontalScroller',
      start: 'top bottom', // Adjust this based on when you want it to start
      end: 'bottom top', // Adjust this for end as well
      onUpdate: (self) => {
        loop.reversed(self.direction === -1); // Reverse when scrolling up (direction -1)
      }
    });
  });

  const tools = [
    'Sveltekit',
    'Tailwind',
    'Appwrite',
    'GSAP',
    'Figma',
    'TypeScript',
    'Pocketbase'
  ];
</script>

<ul
  id="horizontalScroller"
  class="flex h-28 items-center justify-center overflow-hidden bg-surface-d stroke-brand-d font-semibold uppercase text-brand-d md:h-40 xl:h-48 dark:bg-brand-d dark:stroke-primary dark:text-primary"
>
  {#each tools as tool}
    <li
      class="inline-block px-6 text-2xl will-change-transform sm:px-8 md:px-12 md:text-4xl xl:px-16 xl:text-5xl"
    >
      {tool}
    </li>
  {/each}
</ul>
