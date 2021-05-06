import 'virtual:windi.css'

import { createApp, reactive, watchEffect } from 'vue'
import Layout from './layout.vue'

import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(Layout)

// Providers
app.provide('log', console.log.bind(console)) // expose log to the templates. usage: const log = inject('log')
app.provide('$router', router) // expose log to the templates. usage: const log = inject('log')

// Stores
import store from './store.js'
console.log(JSON.stringify(store))
app.provide('$store', store)

// Router
app.use(router)

app.mount('#app')
