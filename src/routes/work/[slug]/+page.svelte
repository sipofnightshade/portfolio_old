<script lang="ts">
  import type { PageData } from './$types';
  import BackgroundLines from '$lib/components/BackgroundLines.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Link from '$lib/icons/Link.svelte';

  let { data }: { data: PageData } = $props();

  $inspect(data.project);
</script>

<section
  class="container relative mx-auto flex h-[92svh] w-screen flex-col justify-between pb-10"
>
  <BackgroundLines />
  <Navbar />

  <div class="relative mt-10 space-y-4">
    <h1 class="relative -left-1 text-8xl font-bold lowercase">{data.project.name}</h1>
    <div class="grid grid-cols-4 gap-2">
      <p class="col-span-2 text-2xl">{data.project.description}</p>
      <!-- this is a placeholder item -->
      <div class=""></div>
      <!-- this is a placeholder item -->
      <ul class="flex grid-cols-4 flex-wrap gap-1.5">
        {#each data.project.technologies as item}
          <li
            class="h-fit w-fit rounded px-2 py-1 font-mono font-bold tracking-tighter"
            class:bg-gray-200={item !== 'sveltekit'}
            class:bg-brand={item === 'sveltekit'}
          >
            {item}
          </li>
        {/each}
      </ul>
    </div>
  </div>

  {#snippet stats(label: string, values: string[] | string)}
    <div class="flex flex-col gap-1 capitalize">
      <h3 class="text-xl font-bold">{label}</h3>
      {#if typeof values === 'string'}
        <p class="font-mono tracking-tighter">{values}</p>
      {:else}
        <p class="font-mono tracking-tighter">{values.join(', ')}</p>
      {/if}
    </div>
  {/snippet}

  <div class="grid grid-cols-4 gap-2">
    {@render stats('Roles', data.project.roles)}
    {@render stats('Platform', data.project.platforms)}
    {@render stats('Industry', data.project.industry)}

    <a
      href="/"
      class="flex h-full items-center justify-between border-2 border-brand px-4 text-brand"
    >
      <span class="text-xl font-semibold tracking-wide">Live website</span>
      <Link classes="h-6 w-6" />
    </a>
  </div>
</section>

<section class="h-screen bg-neutral-950">
  <!-- image goes here -->
</section>
