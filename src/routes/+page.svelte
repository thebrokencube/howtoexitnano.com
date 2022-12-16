<script>
  import CodeBlock from '../components/CodeBlock.svelte';
</script>

<section class="py-6 container mx-auto my-auto m-5 text-center">
  <p class="m-6">
    <CodeBlock text={'^X'} />
    <span class="px-3 text-5xl text-green-500">===</span>
    <CodeBlock text={'control+X'} />
  </p>
  <br /><hr /><br />
  <p class="m-6">
    <CodeBlock text={'^X'} />
    <span class="px-3 text-5xl text-red-500">!==</span>
    <CodeBlock text={'shift+6+X'} />
  </p>
</section>
