<script>
  import Todo from "./Todo.svelte";

  export let name;
</script>

<style lang="scss">
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
  }
</style>

<main class="mx-auto max-w-2xl p-8">
  <h1>Hello {name}!</h1>
  <Todo />
</main>
