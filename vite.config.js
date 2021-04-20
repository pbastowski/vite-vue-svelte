import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import svelte from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
module.exports = defineConfig(({ command, mode }) => {
    return {
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
                extensions: ['vue', 'md', 'svelte'],

                // allow auto import and register components used in markdown
                customLoaderMatcher: path => path.endsWith('.md'),
            }),

            // Allow normal svelte components as well a svelte custome elements
            svelte({
                compilerOptions: { customElement: true },
                include: /\.wc\.svelte$/,
            }),
            svelte({
                compilerOptions: { customElement: false },
                include: /\\.svelte$/,
                exclude: /\.wc\.svelte$/,
            }),
        ],
        build: {
            minify: mode === 'production',
        },
    }
})
