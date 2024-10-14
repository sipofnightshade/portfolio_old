<script lang="ts">
  const inputClass =
    'w-full appearance-none border-0 border-b-2 border-brand bg-transparent px-0 py-2.5 text-3xl text-zinc-900 transition-colors duration-500 placeholder:text-zinc-500 hover:border-brand-dark focus:border-brand focus:outline-none focus:ring-0 dark:border-zinc-600 dark:text-neutral-200 dark:focus:border-brand';

  let name = $state('');
  let company = $state('');
  let email = $state('');
  let details = $state('');

  let allowSubmit = $derived(name && company && email && details);

  $inspect('allowSubmit', allowSubmit);
</script>

<form action="" class="flex flex-col gap-14">
  <!-- name -->
  <input
    type="text"
    name="name"
    id="name"
    bind:value={name}
    class={inputClass}
    placeholder="Name"
    required
  />

  <!-- company -->
  <input
    type="text"
    name="company"
    id="company"
    bind:value={company}
    class={inputClass}
    placeholder="Company"
    required
  />

  <!-- email -->
  <input
    type="email"
    name="email"
    id="email"
    bind:value={email}
    class={inputClass}
    placeholder="Email"
    required
  />

  <!-- details -->
  <textarea
    name="details"
    id="details"
    bind:value={details}
    class={inputClass}
    placeholder="What are we working on?"
    required
  ></textarea>

  <!-- submit -->
  <button
    type="submit"
    class="flex h-20 w-60 items-center justify-center rounded-full text-3xl leading-none transition-colors"
    class:bg-brand={allowSubmit}
    class:bg-neutral-700={!allowSubmit}
    disabled={!allowSubmit}
  >
    Submit
  </button>
</form>
