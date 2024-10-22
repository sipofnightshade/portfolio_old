<script lang="ts">
  import Heading from '$lib/components/Heading.svelte';
  import Contact from '$lib/components/LandingSections/Contact.svelte';
  import { Link } from '$lib/icons';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Heading title="Our works." />

<div class="container mx-auto grid grid-cols-2 gap-x-8 gap-y-16 pb-40 pt-8">
  {#each data.projects as project}
    <a href="/" class="panel group flex flex-col gap-3">
      <!-- image here -->
      <div class="aspect-[4/3] bg-overlay dark:bg-overlay-d"></div>

      <div class="flex items-end justify-between pl-2">
        <h3 class="text-2xl font-bold">{project.name}</h3>

        <div
          class="flex h-14 w-14 items-center justify-center bg-zinc-300 duration-300 group-hover:bg-brand"
        >
          <Link
            class="h-5 w-5 rotate-45 text-black transition-transform group-hover:rotate-0"
          />
        </div>
      </div>
    </a>
  {/each}
</div>

<Contact />
