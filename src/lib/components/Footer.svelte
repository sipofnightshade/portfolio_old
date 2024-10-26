<script lang="ts">
  let { class: className = '' }: { class?: string } = $props();
</script>

<footer
  class="col-span-2 my-4 flex items-center justify-between p-0 font-medium lg:my-8 {className}"
>
  <a href="emailto:info@gregorymcmillan.me">info@gregorymcmillan.me</a>
  <a href="/privacy-policy" target="_blank">Privacy</a>
</footer>
