<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let search = ''

    let t
    const handleKeyup = e => {
        // e.code==='Enter' && search!=='' && dispatch('search')
        if (t) clearTimeout(t)
        t = setTimeout(() => dispatch('search', search), 300)
    }

</script>

<label>
    Search
    <input bind:value={search} on:keyup={ handleKeyup } />
</label>
