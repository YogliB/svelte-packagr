<script>
	/** @type {string} */
	export const name = 'World';
	/** @type {string} */
	export const textColor = '#ff3e00';

	const a = [];
	const b = a?.join(',')?.split();
</script>

<style>
	h1 {
		margin: auto;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 5rem;
		font-weight: lighter;
		text-align: center;
	}
</style>

<h1 style="color: {textColor}">Hello {name}!</h1>
