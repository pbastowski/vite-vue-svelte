<svelte:options tag="my-todos" />

<script>
    import List from './List.svelte'

    export let todos = []

    export let updateTodos = () => {}
</script>

<slot name="head">
    <h2>TODOS</h2>
</slot>

<slot>
    <List
        bind:todos
        on:update={e => {
            todos = todos.filter(i => i !== e.detail)
            updateTodos(todos)
        }}
    />
</slot>
