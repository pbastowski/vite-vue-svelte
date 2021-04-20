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
    {#each todos as item}
        <li on:click={e=>{
            todos=todos.filter(i=>i!==item)
            dispatch('update', todos)
        }} >{item}</li>
    {/each}
    <pre>{todos}</pre>
</slot>

<hr>
<pre>{JSON.stringify($$props)}</pre>
<hr>
