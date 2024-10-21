<script lang="ts">
  import SectionHeading from '../SectionHeading.svelte';

  interface Props {
    class?: string;
  }
  type Services = { title: string; desc: string };

  let { class: className }: Props = $props();

  const services: Services[] = [
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

<section class="b relative bg-surface-d py-48 text-primary-d {className}">
  <div class="container mx-auto">
    <SectionHeading title="services" desc="What I can do for you." dark />
  </div>

  {#snippet service(data: Services)}
    <div class="border-y border-outline-d py-5">
      <div class="container mx-auto">
        <h3 class="text-9xl font-bold uppercase leading-none text-zinc-200">
          {data.title}
        </h3>
      </div>
    </div>
  {/snippet}
  <div class="mt-8 border-b border-outline-d">
    {#each services as data}
      {@render service(data)}
    {/each}
  </div>
</section>
