<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let item = ''

    let lastTitle = item.title
</script>

<h3>
    Edit Item
</h3>


<label>item: <input
    bind:value={item.title}
    on:keyup={e => {
            console.log(e.code)
            e.code==='Enter' ? history.back() :
            e.code==='Escape' ? (item.title = lastTitle, history.back() ) : null
        }
    }
></label>
