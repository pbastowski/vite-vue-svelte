<template>
    <app-header>
        <router-link slot="home" to="/">home</router-link>
        <router-link slot="home/42" to="/42">home/42</router-link>
        <router-link slot="todos" to="/todos">todos</router-link>
        &nbsp; | &nbsp;
        <link-reload to="/todos">TODOS reload</link-reload>
        &nbsp;
        <link-reload to="/">HOME reload</link-reload>
        &nbsp; | &nbsp;
        <link-reload to="/todos" persist>TODOS reload persist</link-reload>
    </app-header>

    <p>* This is the layout page that hosts all Vue routes.</p>

    <router-view />
    <hr />

    <h4>Vue STORE</h4>

    <p>Below are shown the contents of the Vue store in real-time.</p>

    <pre>{{ $store }}</pre>
</template>

<script setup>
    import AppHeader from './app/app-header.wc.svelte'
    import { inject } from 'vue'

    const $store = inject('$store')
</script>
