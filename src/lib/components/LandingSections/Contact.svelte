<script lang="ts">
  import ContactForm from '../ContactForm.svelte';
  import Footer from '../Footer.svelte';
  import SubHeading from '../SubHeading.svelte';

  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();
</script>

<section class="h-screen {className}">
  <div class="container mx-auto flex h-full flex-col justify-between pb-0 pt-40">
    <div class="grid h-full grid-cols-2 gap-2">
      <SubHeading title="contact." desc="Let's get to work!" />
      <ContactForm />
    </div>
    <Footer />
  </div>
</section>
