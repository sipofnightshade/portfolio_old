<script lang="ts">
  import { Triangle, Pentagon, Diamond } from '$lib/icons';
  import Footer from '../Footer.svelte';
</script>

<section class="h-screen">
  <div class="container mx-auto flex h-full flex-col justify-between pb-0 pt-8 md:pt-20">
    <div class="flex h-full flex-col items-center justify-between">
      <div class="flex w-full items-start justify-between gap-2">
        <div class="max-w-md border-l-4 border-outline px-2 dark:border-outline-d">
          <p class="text-xs font-bold sm:text-sm md:text-base">
            Got an idea or a project in mind? Let's bring it to life!
          </p>
        </div>

        <div class="flex h-11 w-11 items-center justify-center bg-frame dark:bg-frame-d">
          <Triangle class="h-5 fill-none stroke-surface" />
        </div>
      </div>
      <a
        href="mailto:info@gregorymcmillan.me"
        class="border-2 border-primary bg-brand p-8 text-4xl font-semibold text-primary sm:text-5xl md:p-10 md:text-6xl lg:border-4 lg:text-7xl xl:text-9xl dark:bg-brand-d"
      >
        Get in touch!
      </a>
      <div class="flex w-full items-center justify-between">
        <div class="flex h-11 w-11 items-center justify-center bg-frame dark:bg-frame-d">
          <Pentagon class="h-6 fill-none stroke-surface" />
        </div>
        <div class="flex h-11 w-11 items-center justify-center bg-frame dark:bg-frame-d">
          <Diamond class="h-6 fill-none stroke-surface" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</section>
