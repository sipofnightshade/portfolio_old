<script lang="ts">
  import { Triangle, Pentagon, Diamond } from '$lib/icons';
  import Footer from '../Footer.svelte';

  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();
</script>

<section class="h-screen {className}">
  <div class="container mx-auto flex h-full flex-col justify-between pb-0 pt-20">
    <div class="flex h-full flex-col items-center justify-between">
      <div class="flex w-full items-start justify-between">
        <div class="max-w-md border-l-4 border-outline px-2 dark:border-outline-d">
          <p class="font-bold">
            Got an idea or a project in mind? I’d love to help bring it to life. Feel free
            to reach out and let’s get started!
          </p>
        </div>

        <div class="flex h-11 w-11 items-center justify-center bg-frame dark:bg-frame-d">
          <Triangle class="h-5 fill-none stroke-surface" />
        </div>
      </div>
      <a
        href="mailto:info@gregorymcmillan.me"
        class="border-4 border-primary bg-brand p-10 text-9xl font-semibold text-primary dark:bg-brand-d"
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
