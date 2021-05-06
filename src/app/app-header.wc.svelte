<svelte:options tag="app-header" />

<nav>
    <slot name="home"><a href="javascript:">home</a></slot>
    &nbsp;
    <slot name="home/42"><a href="javascript:">home/42</a></slot>
    &nbsp;
    <slot name="todos"><a href="javascript:">todos</a></slot>
    <slot />
</nav>
