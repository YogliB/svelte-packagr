import { build } from 'esbuild';
import { Arguments } from './models';
import { getArguments, sveltePreprocessBaseConfig } from './utils';
import svelte from 'esbuild-svelte';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';
import { preprocessComponents } from './preprocess';
const sveltePreprocessConfig = require('./svelte-preprocess.config');

const main = async () => {
	const { dest, input }: Arguments = getArguments();
	const sourceDirectory = input
		?.trim()
		?.split('/')
		?.reverse()
		?.slice(1)
		?.reverse()
		?.join();

	if (!input?.trim()) {
		console.error('Input file missing');
		process.exit(1);
	}

	buildFiles(input, 'esm', dest || '.');
	buildFiles(input, 'cjs', dest || '.');
	preprocessComponents(sourceDirectory, dest || './');
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
						...sveltePreprocessBaseConfig,
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
