<svelte:options tag="my-todos" />

<script>
    console.log('! todos.wc')

    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
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
            console.log('UPDATE:', e.detail)
            todos = todos.filter(i => i !== e.detail)
            updateTodos(todos)
            dispatch('update', todos)
        }}
    />
</slot>
