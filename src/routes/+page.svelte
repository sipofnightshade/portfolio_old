<script lang="ts">
  import Footer from '../lib/components/Footer.svelte';
  import BackgroundLines from '$lib/components/BackgroundLines.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import HeroHeader from '$lib/components/HeroHeader.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import SubHeading from '$lib/components/SubHeading.svelte';
  import Link from '$lib/icons/Link.svelte';
</script>

<section
  class="container relative mx-auto flex h-[92svh] w-screen flex-col justify-between"
>
  <BackgroundLines />
  <Navbar />
  <HeroHeader />
</section>

<!-- about -->
<section class="h-screen bg-neutral-950">
  <div class="container mx-auto grid h-full grid-cols-2 gap-2 py-40">
    <SubHeading title="about." desc="Just some short notes about myself and my goals." />
    <div class="text-4xl font-bold leading-snug text-gray-200">
      <p>
        I am a Frontend Developer and UI/UX Designer from the Caribbean—one of the many
        small islands. I specialize in crafting intuitive interfaces that bridge the gap
        between technology and everyday life.
      </p>
      <br />
      <p>
        My aim is always to design solutions that seamlessly integrate into people's
        lives, regardless of their technical background.
      </p>
    </div>
  </div>
</section>

<!-- work -->
<section class="h-screen">
  <div class="container relative mx-auto grid h-full grid-cols-2 gap-2">
    <BackgroundLines />
    <div class="flex flex-col justify-between pb-20 pt-40">
      <SubHeading
        title="work."
        dark={false}
        desc="A compilation of some of my favourite projects."
      />
      <p class="flex items-start leading-none">
        <strong class="text-9xl text-brand">1</strong>
        <strong class="text-5xl">/5</strong>
      </p>
    </div>
    <div class="flex flex-col gap-8 py-20">
      <!-- image here -->
      <div class="aspect-[4/3] bg-gray-200"></div>

      <div class="flex items-end justify-between">
        <div class="flex flex-col gap-4">
          <h3 class="text-4xl font-bold">Project Name</h3>
          <p class="max-w-lg leading-relaxed">
            Lorem ipsum dolar di datta sen ran truest balen. Anre saj qeor ail ander vol
            ajut ambrosi dannil an cuoi.
          </p>
        </div>

        <a
          href="/"
          class="flex h-24 w-24 items-center justify-center bg-brand transition-colors duration-300 hover:bg-neutral-950"
        >
          <Link classes="h-12 w-12" />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- orange -->
<section class="h-screen bg-brand">
  <div class="container mx-auto flex h-full flex-col justify-center">
    <div class="font-bold">
      <p class="text-8xl leading-tight">
        Okay, that's enough about me. It's time to talk about you. Got a project in mind?
        Let's bring it to life together!
      </p>
    </div>
  </div>
</section>

<section class="h-screen bg-neutral-950">
  <div class="container mx-auto flex h-full flex-col justify-between pb-0 pt-40">
    <div class="grid h-full grid-cols-2 gap-2">
      <SubHeading title="contact." desc="Let's get to work!" />
      <ContactForm />
    </div>
    <Footer />
  </div>
</section>
