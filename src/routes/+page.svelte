<script>
  import CodeBlock from '../components/CodeBlock.svelte';
</script>

<section class="py-6 container mx-auto my-auto m-5 text-center text-2xl md:text-5xl">
  <p class="m-6">
    <CodeBlock text={'^X'} />
    <span class="px-3 text-green-500">===</span>
    <CodeBlock text={'control+X'} />
  </p>
  <br /><hr /><br />
  <p class="m-6">
    <CodeBlock text={'^X'} />
    <span class="px-3 text-red-500">!==</span>
    <CodeBlock text={'shift+6+X'} />
  </p>
  <br /><hr />
</section>
