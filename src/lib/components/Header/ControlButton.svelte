<script lang="ts">
  import { Diamond, Pentagon, Triangle } from '$lib/icons';
  import CornerEdges from './CornerEdges.svelte';

  type Shapes = 'dia' | 'pent' | 'tri';
  type CtrlState = 'correct' | 'incorrect' | 'empty';

  interface Props {
    type: Shapes;
    state: CtrlState;
  }

  let { type, state }: Props = $props();
</script>

<button
  aria-labelledby="control"
  class="relative flex h-24 w-24 items-center justify-center
    {state === 'correct' && 'bg-brand *:stroke-primary dark:bg-brand-d'} 
    {state === 'incorrect' &&
    'bg-primary *:stroke-primary-d dark:bg-primary-d *:dark:stroke-primary'} 
    {state === 'empty' && '*:stroke-primary *:dark:stroke-primary-d'}"
>
  <CornerEdges class="h-3 text-frame dark:text-frame-d" />
  {#if type === 'dia'}
    <Diamond class="h-14 fill-none" />
  {:else if type === 'pent'}
    <Pentagon class="h-14 fill-none" />
  {:else if type === 'tri'}
    <Triangle class="h-[3.25rem] fill-none " />
  {/if}
</button>
