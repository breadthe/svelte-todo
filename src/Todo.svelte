<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
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
      focus-within:border-indigo-800 px-2 py-1 rounded rounded-r-none"
      placeholder="New task"
      bind:value={newtodo}
      on:keydown={addItem}
      use:focusAction />
    <button
      type="button"
      class="px-2 bg-indigo-500 text-indigo-100 hover:text-white
      hover:bg-indigo-600 rounded rounded-l-none"
      on:click={addItem}>
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15">
        <path d="M7.5 1v13M1 7.5h13" stroke="currentColor" />
      </svg>
    </button>
  </div>

  {#if incomplete.length}
    <div class="mt-8">
      <h2 class="text-xl text-left font-light mb-2">
        New Tasks
        <small>({incomplete.length})</small>
      </h2>
      <ul class="text-left bg-white divide-y shadow rounded">
        {#each incomplete as todo (todo.id)}
          <li
            class="flex items-center space-x-2 p-2"
            transition:slide={{ delay: 50, duration: 300, easing: quintOut }}>
            <input type="checkbox" bind:checked={todo.completed} />
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
        class="text-left text-gray-500 line-through bg-white divide-y shadow
        rounded">
        {#each completed as todo (todo.id)}
          <li
            class="flex items-center space-x-2 p-2"
            transition:slide={{ delay: 50, duration: 300, easing: quintOut }}>
            <input type="checkbox" bind:checked={todo.completed} />
            <span>{todo.todo}</span>
          </li>
        {/each}
      </ul>
    </div>
  {:else}
    <!-- -->
  {/if}
</section>
