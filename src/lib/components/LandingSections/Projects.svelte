<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { Link } from '$lib/icons';
  import SectionHeading from '../SectionHeading.svelte';

  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();

  let currentPanel: number = $state(0);
  let totalPanels: number = $state(5);
  let progressBar: HTMLDivElement | null = $state(null);

  // Effect for scroll trigger animations
  $effect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      // Pin the sidebar (#ftLeft) and manage panel animations
      ScrollTrigger.create({
        trigger: '#work',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: '#ftLeft' // Pinning the sidebar
      });

      // Animate the progress bar (fixed to the left edge)
      ScrollTrigger.create({
        trigger: '#work',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: '#progressBar', // Pinning the sidebar
        onUpdate: (self) => {
          // Animate the height of the progress bar smoothly
          gsap.to(progressBar, {
            height: `${self.progress * 100}%`, // Animate height to match progress
            duration: 0.3, // Smooth transition duration
            ease: 'power1.out' // Smooth easing function
          });
        }
      });

      // Create animations for each panel
      const panels = document.querySelectorAll('.panel');
      panels.forEach((panel, index) => {
        gsap.to(panel, {
          y: 0, // Translate Y to 0
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top bottom', // Animation starts when the panel is 80% from the top
            end: 'top 5%', // Ends when the panel is 5% from the top
            scrub: 1, // Smooth scrubbing
            // markers: true,
            onEnter: () => {
              // Prevent incrementing if the panel index is higher than totalPanels
              if (currentPanel !== index + 1 && index + 1 <= totalPanels) {
                currentPanel = index + 1;
              }
            },
            onEnterBack: () => {
              // Prevent double decrementing
              if (currentPanel !== index + 1 && index + 1 >= 1) {
                currentPanel = index + 1;
              }
            }
          }
        });
      });
    });
  });
</script>

{#snippet Panel(data: string)}
  <a href="/" class="panel group my-12 flex translate-y-44 flex-col gap-3">
    <!-- image here -->
    <div class="aspect-[4/3] bg-overlay dark:bg-overlay-d"></div>

    <div class="flex items-end justify-between pl-2">
      <h3 class="text-2xl font-bold">{data}</h3>

      <div
        class="flex h-14 w-14 items-center justify-center bg-zinc-300 duration-300 group-hover:bg-brand"
      >
        <Link
          class="h-5 w-5 rotate-45 text-black transition-transform duration-300 group-hover:rotate-0"
        />
      </div>
    </div>
  </a>
{/snippet}

<section id="work" class="relative {className}">
  <div id="progressBar" class="absolute left-0 top-0 h-screen w-2">
    <div bind:this={progressBar} class="w-full bg-brand dark:bg-brand-d"></div>
  </div>

  <!-- left side -->
  <div class="container mx-auto grid h-full grid-cols-2 gap-2">
    <div id="ftLeft" class="flex h-screen flex-col justify-between pb-20 pt-40">
      <SectionHeading
        title="projects"
        desc="A compilation of some of my favourite projects."
      />
      <div class="flex items-start gap-2 font-bold leading-none">
        <p class="text-9xl text-primary dark:text-primary-d">{currentPanel}</p>
        <div class="pt-2.5 text-4xl text-muted dark:text-muted-d">
          /{totalPanels}
        </div>
      </div>
    </div>
    <!-- right side -->
    <div
      id="ftRight"
      class="relative flex h-full flex-col gap-10 border-x border-outline pb-16 pt-24 dark:border-outline-d"
    >
      <!-- <CornerEdges class="h-2" strokeWidth={20} /> -->

      {@render Panel('Project One')}
      {@render Panel('Project Two')}
      {@render Panel('Project Three')}
      {@render Panel('Project Four')}
      {@render Panel('Project Five')}
    </div>
  </div>
</section>
