<script lang="ts">
  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();
</script>

<section class="relative h-screen {className}">
  <div class="container mx-auto flex h-full flex-col justify-center">
    <div class="font-bold">
      <p class="text-8xl leading-tight">
        Okay, that's enough about me. It's time to talk about you. Got a project in mind?
        Let's bring it to life together!
      </p>
    </div>
  </div>
</section>
