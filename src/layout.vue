<template>
    <app-header @click="e => log('NAVIGATE:', e.detail.to)" />
    <router-view />
</template>

<script setup>
    import AppHeader from './app/app-header.wc.svelte'
    import { inject } from 'vue'

    const log = inject(['log', '$router'])
    console.log('log:', log)
</script>
