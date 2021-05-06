<template>
    <app-header>
        <router-link slot="home" to="/">home</router-link>
        <router-link slot="home/42" to="/42">home/42</router-link>
        <router-link slot="todos" to="/todos">todos</router-link>
        &nbsp;
        <link-reload to="/todos" xpersist>TODOS reload</link-reload>
        &nbsp;
        <link-reload to="/todos" persist>TODOS reload persist</link-reload>
    </app-header>
    <router-view />
    <hr />
    <h4>STORE</h4>
    <pre>{{ $store }}</pre>
</template>

<script setup>
    import AppHeader from './app/app-header.wc.svelte'
    import { inject } from 'vue'

    const $store = inject('$store')
</script>
