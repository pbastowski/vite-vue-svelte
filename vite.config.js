import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import svelte from '@sveltejs/vite-plugin-svelte'
import LiveReload from 'vite-plugin-live-reload'

// https://vitejs.dev/config/
module.exports = defineConfig(({ command, mode }) => {
    return {
        plugins: [
            Vue({
                include: [/\.vue$/, /\.md$/], // <--

                // Prevent Vue from throwing messages about unregistered custom elements
                template: {
                    compilerOptions: {
                        isCustomElement: tag =>
                            tag.startsWith('my-') || tag.startsWith('app-'),
                    },
                },
            }),

            // Automatic component registration upon usage
            ViteComponents({
                // Custom folder in which components
                dirs: ['src/components'],

                // allow auto load markdown components under `./src/components/`
                extensions: ['vue', 'md', 'svelte'],

                // allow auto import and register components used in markdown
                customLoaderMatcher: path => path.endsWith('.md'),
            }),

            // File based routing - all page components are loaded async
            Pages({
                exclude: ['**/components/*.vue'],
                extensions: ['vue', 'js', 'md'],
            }),

            // Vue components as Markdown plugin
            Markdown(),

            // Tailwind plugin
            WindiCSS({
                preflight: false, // turn off the CSS resets
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

            LiveReload('**/*.wc.svelte'), // needed to reload the page after a customElement is updated
        ],

        build: {
            minify: mode === 'production',
        },
    }
})
