<script lang="ts">
  import SectionHeading from '../SectionHeading.svelte';

  interface Props {
    class?: string;
  }
  type Services = { title: string; desc: string };

  let { class: className }: Props = $props();

  let services: Services[] = [
    {
      title: 'ui / ux',
      desc: 'I design user interfaces that are intuitive and visually appealing.'
    },
    {
      title: 'development',
      desc: 'I build websites and web applications using the latest technologies and frameworks.'
    },
    { title: 'ai / llm', desc: 'Utilizing AI to help me build better products.' },
    { title: 'review', desc: 'I review your current solutions and provide feedback.' }
  ];
</script>

<section class="relative bg-black py-48 {className}">
  <div class="container mx-auto">
    <SectionHeading title="services" darkText />
  </div>

  {#snippet service(data: Services)}
    <div class="border-y border-zinc-800 py-5">
      <div class="container mx-auto">
        <h3 class="text-9xl font-bold uppercase leading-none text-zinc-200">
          {data.title}
        </h3>
      </div>
    </div>
  {/snippet}
  <div class="mt-8 border-b border-zinc-800">
    {#each services as data}
      {@render service(data)}
    {/each}
  </div>
</section>
