import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/], // <--
        }),
        Pages({
            exclude: ['**/components/*.vue'],
            extensions: ['vue', 'js', 'md'],
        }),
        Markdown(),
        WindiCSS({
            preflight: false,
        }),
        ViteComponents({
            // allow auto load markdown components under `./src/components/`
            extensions: ['vue', 'md'],

            // allow auto import and register components used in markdown
            customLoaderMatcher: path => path.endsWith('.md'),
        }),
    ],
})
