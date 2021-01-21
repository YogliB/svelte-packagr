import { build } from 'esbuild';
import { Arguments } from './models';
import { getArguments } from './utils';
import svelte from 'esbuild-svelte';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';
import { preprocessComponents } from './preprocess';
const sveltePreprocessConfig = require('./svelte-preprocess.config');

const main = async () => {
	const { dest, input }: Arguments = getArguments();
const destinationDirectory = ;

	if (!input?.trim()) {
		console.error('Input file missing');
		process.exit(1);
	}

	buildFiles(input, 'esm', dest || '.');
	buildFiles(input, 'cjs', dest || '.');
	preprocessComponents('', dest || './');
};

const buildFiles = (
	entryPoint: string,
	format: 'esm' | 'cjs',
	distDir: string
) => {
	try {
		const outfile = `${distDir}/${
			format === 'cjs' ? 'index.js' : 'index.mjs'
		}`;

		build({
			bundle: true,
			entryPoints: [entryPoint],
			format,
			minify: true,
			outfile,
			platform: 'browser',
			target: 'esnext',
			plugins: [
				svelte({
					compileOptions: { dev: false, css: true },
					preprocessor: sveltePreprocess({
						babel: true,
						postcss: {
							plugins: [require('autoprefixer')],
						},
						...(sveltePreprocessConfig || {}),
					}),
				}),
			],
		});

		return true;
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

main();
