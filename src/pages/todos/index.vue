<template>
    <my-todos
        :todos="$store.todos"
        @update="console.log('EV:', $event)"
        :updateTodos="updateTodos"
    />
</template>

<script>
    import './todos.wc.svelte'

    export default {
        inject: ['$store'],

        methods: {
            updateTodos(newTodos) {
                this.$store.todos = newTodos
            },
        },
    }
</script>
