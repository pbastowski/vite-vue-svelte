<template>
    <my-todos :todos="todos" @update="console.log('EV:', $event)" />
    <hr />
    <pre>VUE: {{ todos }}</pre>
</template>

<script setup>
    import './todos.wc.svelte'
    const todos = ['one', 'two']
</script>
