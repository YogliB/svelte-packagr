<script>
	import { MDCRipple } from '@material/ripple';
	import { onMount } from 'svelte';

	onMount(() => {
		new MDCRipple(document.querySelector('.mdc-button'));
	});
</script>

<button class="mdc-button"> <slot /> </button>

<style lang="scss" global>
	@use "@material/button";
	@include button.core-styles;
</style>
