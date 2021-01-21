import { build } from 'esbuild';
import { Arguments } from './models';
import { getArguments, sveltePreprocessBaseConfig } from './utils';
import svelte from 'esbuild-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { preprocessComponents } from './preprocess';

const main = async () => {
	const { input, output, preprocess, config }: Arguments = getArguments();
	const sourceDirectory = input
		?.trim()
		?.split('/')
		?.reverse()
		?.slice(1)
		?.reverse()
		?.join();
	const preprocessConfig: object = config?.trim() ? await import(config) : {};

	if (!input?.trim()) {
		console.error('Input file missing');
		process.exit(1);
	}

	buildFiles(input, 'esm', output || '.', preprocessConfig);
	buildFiles(input, 'cjs', output || '.', preprocessConfig);

	if (preprocess !== false)
		preprocessComponents(sourceDirectory, output || './', preprocessConfig);
};

const buildFiles = (
	entryPoint: string,
	format: 'esm' | 'cjs',
	destinationDirectory: string,
	preprocessConfig: any,
) => {
	try {
		const outfile = `${destinationDirectory}/${
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
						...preprocessConfig,
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
