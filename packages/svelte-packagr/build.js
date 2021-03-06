const { build } = require('esbuild');
const { copyFileSync } = require('fs');

const importPathPlugin = {
	name: 'import-path',
	setup(build) {
		build.onResolve(
			{ filter: /^\.\/svelte-preprocess.config$/ },
			(args) => {
				return { path: args.path, external: true };
			},
		);
	},
};

build({
	bundle: true,
	entryPoints: ['./src/bin.ts'],
	external: [
		'autoprefixer',
		'esbuild-svelte',
		'esbuild',
		'svelte-preprocess',
	],
	format: 'cjs',
	minify: true,
	outfile: './bin.js',
	platform: 'node',
	target: 'node10',
	plugins: [importPathPlugin],
}).catch((error) => {
	console.error(error);
	process.exit(1);
});

copyFileSync('./help.md', './dist/help.md');
