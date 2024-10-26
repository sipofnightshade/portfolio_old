<script lang="ts">
  import { setMode, mode } from 'mode-watcher';

  const toggleMode = () => ($mode === 'light' ? setMode('dark') : setMode('light'));
</script>

<button class="text-lg text-primary" onclick={toggleMode}>
  {$mode === 'dark' ? 'AM' : 'PM'}
</button>
