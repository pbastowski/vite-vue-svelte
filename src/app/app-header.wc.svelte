<svelte:options tag="app-header" />

<nav>
    <a href="javascript:" on:click on:click={()=>dispatch('navigate', { to: '/todos'})} class="">todos</a>
</nav>

<script>
    import { createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
</script>

