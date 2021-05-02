<template>
    <my-todos
        :todos="todos"
        @update="console.log('EV:', $event)"
        :updateTodos="updateTodos"
    />

    <hr />
    <pre>VUE: {{ todos }}</pre>
</template>

<script>
    console.log('! todos/index')

    import './todos.wc.svelte'

    export default {
        data: () => ({
            todos: [
                { title: 'Item 1' },
                { title: 'Another Item' },
                { title: 'Robot 3' },
            ],
        }),

        methods: {
            updateTodos(newTodos) {
                this.todos = newTodos
                console.log('VUE: update:', this.todos, newTodos)
            },
        },
    }
</script>
