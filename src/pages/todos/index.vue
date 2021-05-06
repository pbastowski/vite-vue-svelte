<template>
    <h1>TODOS - Vue wrapper</h1>

    <p>
        * This is the Vue wrapper page, which hosts the Svelte custom element
        that wraps the Svelte todos mini feature
    </p>

    <my-todos :todos="$store.todos" @update="$store.todos = $event.detail" />
</template>

<script setup>
    import './todos.wc.svelte'
    import { inject } from 'vue'

    const $store = inject('$store')
</script>
