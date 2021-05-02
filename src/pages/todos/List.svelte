<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let todos
</script>

{#each todos as item, index}
    <li
        on:click={e => {
            dispatch('update', item)
        }}
    >
        {item.title}
    </li>
{/each}
