import { build } from 'esbuild';
import { Arguments } from './models';
import { getArguments } from './utils';
import svelte from 'esbuild-svelte';

const main = async () => {
	const args: Arguments = getArguments();
	const svelteConfig = await import('./svelte.config.js');

	build({
		bundle: true,
		entryPoints: ['./tests/MyComponent.svelte'],
		format: 'esm',
		minify: true,
		outfile: './tests/index.mjs',
		platform: 'browser',
		target: 'esnext',
		plugins: [svelte({ compileOptions: { dev: false, css: true } })],
	}).catch((error) => {
		console.error(error);
		process.exit(1);
	});
};

main();
