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
  class="relative flex h-12 w-12 items-center justify-center md:h-16 md:w-16 xl:h-20 xl:w-20
    {state === 'correct' && 'bg-brand *:stroke-primary dark:bg-brand-d'} 
    {state === 'incorrect' &&
    'bg-primary *:stroke-primary-d dark:bg-primary-d *:dark:stroke-primary'} 
    {state === 'empty' && '*:stroke-primary *:dark:stroke-primary-d'}"
>
  <CornerEdges class="h-2 text-frame md:h-2.5 xl:h-3 dark:text-frame-d" />
  {#if type === 'dia'}
    <Diamond class="md:10 h-8 fill-none xl:h-14" />
  {:else if type === 'pent'}
    <Pentagon class="md:10 h-8 fill-none xl:h-14" />
  {:else if type === 'tri'}
    <Triangle class="md:10 h-8 fill-none xl:h-[3.25rem] " />
  {/if}
</button>
