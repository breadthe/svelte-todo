<script>
  import Todo from "./Todo.svelte";

  export let message;
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
  <h1 class="text-center">{message}</h1>
  <Todo />
</main>
