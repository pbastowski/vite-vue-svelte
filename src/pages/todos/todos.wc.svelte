<svelte:options tag='my-todos' />

<script>
    import { Router, Route, Link } from 'yrv'

    import List from './List.svelte'
    import Item from './Item.svelte'
    import Search from './Search.svelte'

    import { writable } from 'svelte/store'

    export let todos = []
    let list         = writable(todos)
    console.log('$list:', $list, typeof todos[0])

    let item   = {}
    let search = ''

</script>

<slot name='head'>
    <h1>TODOS</h1>
</slot>

<slot>
    <Link href='/'>Home</Link>
    |
    <Link href='/not/found'>NotFound</Link>

    <p>
        <Search {search} on:search={e=>search=e.detail} />
    </p>
    <p>
        <Router>
            <Route exact>
                <List bind:list={$list} {search} on:click='{e => item = e.detail}' />
            </Route>
            <Route fallback>Not found</Route>
            <Route exact path='/:item' let:router>
                <Item bind:item />
            </Route>
        </Router>
    </p>

</slot>

<hr>
SVELTE: $$props:
<pre>{JSON.stringify($$props)}</pre>
<hr>
