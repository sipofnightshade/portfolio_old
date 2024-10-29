<script lang="ts">
  import { dev } from '$app/environment';
</script>

{#if dev}
  <div
    class="fixed bottom-3 right-3 z-50 rounded bg-purple-500 px-3 py-2 font-bold uppercase text-primary"
  >
    <span class="nn:hidden">base</span>
    <span class="hidden nn:block xs:hidden">nano</span>
    <span class="hidden xs:block sm:hidden">xs</span>
    <span class="hidden sm:block md:hidden">sm</span>
    <span class="hidden md:block lg:hidden">md</span>
    <span class="hidden lg:block xl:hidden">lg</span>
    <span class="hidden xl:block 2xl:hidden">xl</span>
    <span class="3xl:hidden hidden 2xl:block">2xl</span>
  </div>
{/if}
