<script>
	import { MDCRipple } from '@material/ripple';
	import { onMount } from 'svelte';

	onMount(() => {
		new MDCRipple(document.querySelector('.mdc-button'));
	});

	/** @type {string} */
	export const name = 'World';
	/** @type {string} */
	export const textColor = '#ff3e00';

	const a = [];
	const b = a?.join(',')?.split();
</script>

<style lang="scss">
	:global() {
		@use "@material/button";
		@include button.core-styles;
	}

	h1 {
		margin: auto;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 5rem;
		font-weight: lighter;
		text-align: center;
	}
</style>

<h1 style="color: {textColor}">Hello {name}!</h1>

<button class="mdc-button">ClickMe</button>
