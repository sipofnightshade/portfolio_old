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

    // Create a GSAP context for better cleanup
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        // Pin the sidebar
        ScrollTrigger.create({
          trigger: '#work',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: '#ftLeft'
        });

        // Progress bar animation
        ScrollTrigger.create({
          trigger: '#work',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: '#progressBar',
          onUpdate: (self) => {
            gsap.to(progressBar, {
              height: `${self.progress * 100}%`,
              duration: 0.3,
              ease: 'power1.out'
            });
          }
        });

        // Panel animations
        const panels = document.querySelectorAll('.panel');
        panels.forEach((panel, index) => {
          gsap.to(panel, {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top 80%',
              end: 'top 5%',
              scrub: 1,
              onEnter: () => {
                if (currentPanel !== index + 1 && index + 1 <= totalPanels) {
                  currentPanel = index + 1;
                }
              },
              onEnterBack: () => {
                if (currentPanel !== index + 1 && index + 1 >= 1) {
                  currentPanel = index + 1;
                }
              }
            }
          });
        });
      });
    });

    // Return cleanup function
    return () => {
      ctx.revert(); // This will clean up all animations, ScrollTriggers, and media queries
    };
  });
</script>

{#snippet Panel(data: string)}
  <a
    href="/"
    class="panel group my-2 flex flex-col gap-3 sm:my-4 lg:my-12 lg:translate-y-44 lg:opacity-30"
  >
    <!-- image here -->
    <div class="aspect-square bg-overlay dark:bg-overlay-d"></div>

    <div class="flex items-end justify-between lg:pl-2">
      <h3 class="text-xl font-bold sm:text-2xl">{data}</h3>

      <div
        class="hidden h-11 w-11 items-center justify-center bg-zinc-300 duration-300 group-hover:bg-brand lg:flex xl:h-14 xl:w-14"
      >
        <Link
          class="h-4 w-4 rotate-45 text-black transition-transform duration-300 group-hover:rotate-0 xl:h-5 xl:w-5"
        />
      </div>
    </div>
  </a>
{/snippet}

<section id="work" class="relative mt-28 lg:mt-0 {className}">
  <div id="progressBar" class="absolute left-0 top-0 hidden h-screen w-2 lg:block">
    <div bind:this={progressBar} class="w-full bg-brand dark:bg-brand-d"></div>
  </div>

  <div class="container h-full gap-2 lg:grid lg:grid-cols-5 2xl:grid-cols-2">
    <!-- left side -->
    <div
      id="ftLeft"
      class="flex flex-col justify-between lg:col-span-2 lg:h-screen lg:pb-20 lg:pt-40 2xl:col-span-1"
    >
      <SectionHeading
        title="projects"
        desc="A compilation of some of my favourite projects."
      />
      <div class="hidden items-start gap-2 font-bold leading-none lg:flex">
        <p class="text-9xl text-primary dark:text-primary-d">{currentPanel}</p>
        <div class="pt-2.5 text-4xl text-muted dark:text-muted-d">
          /{totalPanels}
        </div>
      </div>
    </div>
    <!-- right side -->
    <div
      id="ftRight"
      class="relative col-span-3 flex h-full flex-col gap-4 border-outline pb-10 pt-8 lg:gap-10 lg:border-x lg:pb-16 lg:pt-24 2xl:col-span-1 dark:border-outline-d"
    >
      {@render Panel('Project One')}
      {@render Panel('Project Two')}
      {@render Panel('Project Three')}
      {@render Panel('Project Four')}
      {@render Panel('Project Five')}
    </div>
  </div>
</section>
