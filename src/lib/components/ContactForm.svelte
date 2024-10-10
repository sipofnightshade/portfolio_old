<script lang="ts">
  let inputClass =
    'w-full appearance-none border-0 border-b-2 border-brand bg-transparent px-0 py-2.5 text-3xl text-zinc-900 transition-colors duration-500 placeholder:text-zinc-500 hover:border-brand-dark focus:border-brand focus:outline-none focus:ring-0 dark:border-zinc-600 dark:text-neutral-200 dark:focus:border-brand';
</script>

<form action="" class="flex flex-col gap-14">
  <!-- name -->
  <input
    type="name"
    name="floating_name"
    id="floating_name"
    class={inputClass}
    placeholder="Name"
    required
  />

  <!-- company -->
  <input
    type="company"
    name="floating_company"
    id="floating_company"
    class={inputClass}
    placeholder="Company"
    required
  />

  <!-- email -->
  <input
    type="email"
    name="floating_email"
    id="floating_email"
    class={inputClass}
    placeholder="Email"
    required
  />

  <!-- details -->
  <textarea
    name="floating_details"
    id="floating_details"
    class={inputClass}
    placeholder="What are we working on?"
    required
  ></textarea>

  <!-- submit -->
  <button
    type="submit"
    class="flex h-20 w-60 items-center justify-center rounded-full text-3xl leading-none"
    class:bg-brand={false}
    class:bg-neutral-700={true}
  >
    Submit
  </button>
</form>
