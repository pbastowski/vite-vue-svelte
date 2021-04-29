<script>
  import { Link } from 'yrv';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let list //= []
	export let search = ''

	console.log('LIST: search', search)

	// let filteredList = $list
	let searchText = search.toLowerCase()

	$: filteredList = $list.filter(item => item.title.toLowerCase().includes(search))



</script>

{#each filteredList as item}
	<Link href="/{item.title}">
		<li on:click={()=> dispatch('click', item) }>{item.title}</li>
	</Link>
{/each}

<!-- 	<li on:click={()=> dispatch('click', item) }>{item}</li> -->
