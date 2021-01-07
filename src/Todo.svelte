<script>
  import { uuid } from "./utils";

  let newtodo = "";
  let todos = [];

  $: incomplete = todos.filter(i => !i.completed);
  $: completed = todos.filter(i => i.completed);

  function addItem(event = null) {
    if ((event.type === "click" || event.key === "Enter") && newtodo) {
      todos.push({ id: uuid(), todo: newtodo, completed: false });
      todos = todos;
      newtodo = "";
    }
  }

  function toggle(id) {
    let todo = todos.find(i => i.id === id);
    todo.completed = !todo.completed;
    todos = todos;
  }

  function clearCompleted() {
    todos = incomplete;
  }

  function focusAction(node) {
    node.focus();
  }
</script>

<style lang="scss">

</style>

<section class="mt-4 text-center">
  <div class="flex justify-center">
    <input
      type="text"
      class="border-2 border-indigo-500 focus:outline-none
      focus-within:border-indigo-800 px-2 py-1"
      placeholder="New task"
      bind:value={newtodo}
      on:keydown={addItem}
      use:focusAction />
    <button
      type="button"
      class="px-2 bg-indigo-500 text-indigo-100 hover:text-white
      hover:bg-indigo-600"
      on:click={addItem}>
      +
    </button>
  </div>

  {#if incomplete.length}
    <div class="mt-8">
      <h2 class="text-xl text-left font-light mb-2">
        New Tasks
        <small>({incomplete.length})</small>
      </h2>
      <ul class="text-left bg-white p-4 shadow rounded">
        {#each incomplete as todo (todo.id)}
          <li class="flex items-center space-x-2">
            <input type="checkbox" on:click={toggle(todo.id)} />
            <span>{todo.todo}</span>
          </li>
        {/each}
      </ul>
    </div>
  {:else}
    <div class="my-2">No new tasks yet - add one 👆</div>
  {/if}

  {#if completed.length}
    <hr />
    <div class="mt-8">
      <h2 class="text-xl text-left font-light mb-2 flex items-center">
        <span>
          Completed
          <small>({completed.length})</small>
        </span>
        <button
          type="button"
          class="border border-gray-500 bg-gray-300 hover:bg-gray-500 px-1
          text-xs ml-2"
          on:click={clearCompleted}>
          clear
        </button>
      </h2>
      <ul
        class="text-left text-gray-500 line-through bg-white p-4 shadow rounded">
        {#each completed as todo (todo.id)}
          <li class="flex items-center space-x-2">
            <input type="checkbox" on:click={toggle(todo.id)} checked />
            <span>{todo.todo}</span>
          </li>
        {/each}
      </ul>
    </div>
  {:else}
    <!-- -->
  {/if}
</section>
