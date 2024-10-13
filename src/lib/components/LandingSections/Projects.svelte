<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import Link from '$lib/icons/Link.svelte';
  import BackgroundLines from '../BackgroundLines.svelte';
  import SubHeading from '../SubHeading.svelte';

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
            end: 'top 20%', // Ends when the panel is 20% from the top
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
  <div class="panel my-12 flex translate-y-44 flex-col gap-6">
    <!-- image here -->
    <div class="aspect-[4/3] bg-gray-200"></div>

    <div class="flex items-end justify-between">
      <div class="flex flex-col gap-3">
        <h3 class="text-4xl font-bold">{data}</h3>
        <p class="max-w-lg leading-relaxed">
          Lorem ipsum dolar di datta sen ran truest balen. Anre saj qeor ail ander vol
          ajut ambrosi dannil an cuoi.
        </p>
      </div>

      <a
        href="/"
        class="flex h-20 w-20 items-center justify-center bg-brand transition-colors duration-300 hover:bg-neutral-950"
      >
        <Link classes="h-10 w-10 text-white" />
      </a>
    </div>
  </div>
{/snippet}

<section id="work" class="relative">
  <!-- progress bar  -->
  <div id="progressBar" class="absolute left-0 top-0 h-screen w-1.5 bg-zinc-300">
    <div bind:this={progressBar} class="w-full bg-brand"></div>
  </div>
  <!-- progress bar  -->
  <div class="container relative mx-auto grid h-full grid-cols-2 gap-2">
    <BackgroundLines />
    <div id="ftLeft" class="flex h-screen flex-col justify-between pb-20 pt-40">
      <SubHeading
        title="work."
        dark={false}
        desc="A compilation of some of my favourite projects."
      />
      <p class="flex items-start leading-none">
        <strong class="text-9xl text-brand">{currentPanel}</strong>
        <strong class="text-5xl">/{totalPanels}</strong>
      </p>
    </div>
    <!-- right side -->
    <div id="ftRight" class="flex h-full flex-col gap-10 py-16">
      {@render Panel('Project One')}
      {@render Panel('Project Two')}
      {@render Panel('Project Three')}
      {@render Panel('Project Four')}
      {@render Panel('Project Five')}
    </div>
  </div>
</section>
