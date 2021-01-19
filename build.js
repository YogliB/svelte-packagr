const { build } = require('esbuild');

build({
	bundle: true,
	entryPoints: ['./src/bin.ts'],
	external: ['esbuild', 'esbuild-svelte', 'mri'],
	format: 'cjs',
	minify: true,
	outfile: './dist/bin.js',
	platform: 'node',
	target: 'node10',
}).catch((error) => {
	console.error(error);
	process.exit(1);
});
