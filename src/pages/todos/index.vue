<template>
    <my-todos :todos="todos" @update="console.log('EV:', $event)" />
    <hr />
    <pre>VUE: {{ todos }}</pre>
</template>

<script setup>
    import './todos.wc.svelte'
    const todos = [
        { title: 'Item 1' },
        { title: 'Another Item' },
        { title: 'Robot 3' },
    ]

    console.log('! todos/index')
</script>
