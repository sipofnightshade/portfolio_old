<script lang="ts">
  import type { ButtonProps } from './types';

  let { handleClick, children, class: className = '' }: ButtonProps = $props();
</script>

<button onclick={handleClick} class="flex items-center gap-3 {className}">
  <span
    class="text-lg font-medium uppercase leading-none tracking-wide text-primary dark:text-primary-d"
    >{@render children()}</span
  >
  <div class="flex flex-col gap-1.5 pt-0.5">
    <div class="line-top h-[0.2rem] w-8 bg-frame-d dark:bg-frame-d"></div>
    <div class="line-bottom h-[0.2rem] w-8 bg-frame-d dark:bg-frame-d"></div>
  </div>
</button>
