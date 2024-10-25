<script lang="ts">
  import SectionHeading from '../SectionHeading.svelte';
  import gsap from 'gsap';

  type Services = { title: string; desc: string };

  const services: Services[] = [
    {
      title: 'ui / ux',
      desc: 'Creating seamless, user-friendly designs that improve the way people interact with your product.'
    },
    {
      title: 'development',
      desc: 'Developing clean, efficient code for visually stunning and responsive websites.'
    },
    { title: 'ai / llm', desc: 'Utilizing AI to help me build better products.' },
    { title: 'review', desc: 'I review your current solutions and provide feedback.' }
  ];

  let serviceItems: HTMLElement[] = $state([]);
  let shutterTops: HTMLElement[] = $state([]);
  let shutterBottoms: HTMLElement[] = $state([]);
  let titles: HTMLElement[] = $state([]);
  let contents: HTMLElement[] = $state([]);

  $effect(() => {
    serviceItems.forEach((service, index) => {
      const shutterTop = shutterTops[index];
      const shutterBottom = shutterBottoms[index];
      const title = titles[index];
      const content = contents[index];

      // Initialize GSAP animations
      gsap.set([shutterTop, shutterBottom], { yPercent: 0 });
      gsap.set(title, { opacity: 1 });
      gsap.set(content, { opacity: 0 });

      // Create a reusable timeline for each service item
      const tl = gsap.timeline({ paused: true, reversed: true });

      tl.to(shutterTop, { yPercent: -100, duration: 0.15, ease: 'power1.out' })
        .to(shutterBottom, { yPercent: 100, duration: 0.15, ease: 'power1.out' }, 0)
        .to(title, { opacity: 0, duration: 0.1, ease: 'back.inOut' }, 0)
        .to(content, { opacity: 1, duration: 0.1, ease: 'back.inOut' }, 0.15);

      // Add hover animation using GSAP timeline
      service.addEventListener('mouseenter', () => {
        tl.reversed(false);
        tl.play();
      });

      service.addEventListener('mouseleave', () => {
        tl.reverse();
      });
    });
  });
</script>

<section
  class="relative bg-surface-d py-28 text-primary-d md:py-32 lg:py-40 dark:border-t dark:border-outline-d"
>
  <div class="container mx-auto">
    <SectionHeading title="services" desc="What I can do for you." dark />
  </div>

  <div class="mt-8 border-b border-outline-d">
    {#each services as data, i}
      <div
        bind:this={serviceItems[i]}
        class="service-item group relative h-32 overflow-hidden border-y border-outline-d bg-brand-d md:h-36 xl:h-48"
      >
        <!-- shutters -->
        <div
          bind:this={shutterTops[i]}
          class="shutter-t absolute left-0 top-0 h-[51%] w-full bg-surface-d"
        ></div>
        <div
          bind:this={shutterBottoms[i]}
          class="shutter-b absolute bottom-0 left-0 h-[51%] w-full bg-surface-d"
        ></div>

        <!-- wrapper container for positioning fixes -->
        <div class="container relative h-full">
          <!-- title -->
          <div
            bind:this={titles[i]}
            class="service-title absolute z-20 flex h-full w-full items-center"
          >
            <h3
              class="xs:text-5xl text-4xl font-bold uppercase leading-none text-primary-d sm:text-6xl md:text-7xl xl:text-9xl"
            >
              {data.title}
            </h3>
          </div>
          <!-- details -->
          <div
            bind:this={contents[i]}
            class="details absolute flex h-full w-full flex-col items-start justify-center gap-2 py-2"
          >
            <h3 class="font-bold uppercase leading-none text-primary lg:text-3xl">
              {data.title}
            </h3>
            <p class="text-primary md:w-2/3 lg:w-full">{data.desc}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .shutter-t,
  .shutter-b {
    z-index: 1;
    transition: transform 0.3s ease;
  }

  .service-title,
  .details {
    transition: opacity 0.15s ease;
  }
</style>
