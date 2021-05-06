<svelte:options tag="my-todos" />

<script>
    import List from './List.svelte'

    export let todos = []

    export let updateTodos = () => {}
</script>

<slot name="head">
    <h1>TODOS - Svelte</h1>
</slot>

<p>
    Try deleting the items below by clicking the round (x) and see how they also
    disappear from the Vue side store.
</p>

<slot>
    <List
        bind:todos
        on:update={e => {
            todos = todos.filter(i => i !== e.detail)
            updateTodos(todos)
        }}
    />
</slot>
