import 'virtual:windi.css'

import { createApp } from 'vue'
import Layout from './layout.vue'

import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

import './app/s01.wc.svelte'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(Layout)

app.provide('log', console.log.bind(console))

app.use(router)

app.mount('#app')

console.log('! MAIN')
