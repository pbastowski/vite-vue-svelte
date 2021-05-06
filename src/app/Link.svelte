<script>
    import { router } from './store.js'

    export let to

    console.log('LINK: router:', $router)
</script>

<a href="javascript:" on:click={() => $router.push(to)}><slot /></a>
