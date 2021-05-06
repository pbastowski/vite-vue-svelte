<template>
    <h1>TODOS - Vue wrapper</h1>

    <p>
        * This is the Vue wrapper page, which hosts the Svelte custom element
        that wraps the Svelte todos mini feature
    </p>

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
