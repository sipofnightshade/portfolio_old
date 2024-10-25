<script lang="ts">
  import SectionHeading from '../SectionHeading.svelte';
  import gsap from 'gsap';

  interface Props {
    class?: string;
  }
  type Services = { title: string; desc: string };

  let { class: className }: Props = $props();

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

  // Use GSAP for split reveal animations
  $effect(() => {
    const services = document.querySelectorAll('.service-item');

    services.forEach((service) => {
      const shutterTop = service.querySelector('.shutter-t');
      const shutterBottom = service.querySelector('.shutter-b');
      const title = service.querySelector('.service-title');
      const content = service.querySelector('.details');

      // Initialize GSAP animations
      gsap.set([shutterTop, shutterBottom], { yPercent: 0 });
      gsap.set(title, { opacity: 1 });
      gsap.set(content, { opacity: 0 });

      // Create a reusable timeline for each service item
      const tl = gsap.timeline({ paused: true, reversed: true });

      tl.to(shutterTop, { yPercent: -100, duration: 0.15, ease: 'back.inOut' })
        .to(shutterBottom, { yPercent: 100, duration: 0.15, ease: 'back.inOut' }, 0)
        .to(title, { opacity: 0, duration: 0.1, ease: 'back.inOut' }, 0)
        .to(content, { opacity: 1, duration: 0.1, ease: 'back.inOut' }, 0.15);

      // Add hover animation using GSAP timeline
      service.addEventListener('mouseenter', () => {
        tl.reversed(false); // Ensure the timeline plays forward
        tl.play();
      });

      // Reverse animation on mouseleave
      service.addEventListener('mouseleave', () => {
        tl.reverse(); // Reverse the timeline
      });
    });
  });
</script>

<section
  class="relative bg-surface-d py-40 text-primary-d dark:border-t dark:border-outline-d {className}"
>
  <div class="container mx-auto">
    <SectionHeading title="services" desc="What I can do for you." dark />
  </div>

  <div class="mt-8 border-b border-outline-d">
    {#each services as data}
      <div
        class="service-item group relative h-28 overflow-hidden border-y border-outline-d bg-brand-d md:h-36 xl:h-52"
      >
        <!-- shutters -->
        <div class="shutter-t absolute left-0 top-0 h-1/2 w-full bg-surface-d"></div>
        <div class="shutter-b absolute bottom-0 left-0 h-1/2 w-full bg-surface-d"></div>

        <div class="container !bg-red-500">
          <!-- title -->
          <div class="service-title absolute z-20 flex h-full w-full items-center">
            <h3
              class="text-6xl font-bold uppercase leading-none text-primary-d md:text-7xl xl:text-9xl"
            >
              {data.title}
            </h3>
          </div>
          <!-- details -->
          <div
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
  .service-item {
    position: relative;
    overflow: hidden;
  }

  .shutter-t,
  .shutter-b {
    z-index: 1;
    transition: transform 0.3s ease;
  }

  .service-title,
  .details {
    transition: opacity 0.1s ease;
  }
</style>
