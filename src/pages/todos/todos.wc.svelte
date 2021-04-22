<svelte:options tag="my-todos" />

<script>
    export let todos = []
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let me
</script>

<slot name="head">
    <h1>TODOS</h1>
</slot>

<slot>
    {#each todos as item, index}
        <li on:click={e=>{
            todos=todos.filter(i=>i!==item)
            dispatch('update', todos)
        }} >{item} - {index}</li>
    {/each}
    <pre>SVELTE: {todos}</pre>
</slot>

<hr>
SVELTE: $$props: <pre>{JSON.stringify($$props)}</pre>
<hr>
