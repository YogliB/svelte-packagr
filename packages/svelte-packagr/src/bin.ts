import { build } from 'esbuild';
import { Arguments } from './models';
import { getArguments, logHelp, sveltePreprocessBaseConfig } from './utils';
import svelte from 'esbuild-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { preprocessComponents } from './preprocess';
import { red } from 'chalk';

const main = async () => {
	const {
		config,
		help,
		input,
		output,
		preprocess = 'all',
	}: Arguments = getArguments();

	if (help) {
		logHelp();
		return;
	}

	const sourceDirectory = input
		?.trim()
		?.split('/')
		?.reverse()
		?.slice(1)
		?.reverse()
		?.join('/');

	let preprocessConfig: object;

	try {
		preprocessConfig = config?.trim() ? await import(config) : {};
	} catch (error) {
		preprocessConfig = {};

		console.error(
			red("Couldn't find config file, falling back to defaults."),
		);
	}

	if (!input?.trim()) {
		console.error(red('Input file missing'));
		process.exit(1);
	}

	buildFiles(
		input,
		'esm',
		output || '.',
		preprocessConfig,
		['none', 'js'].includes(preprocess?.trim()),
	);
	buildFiles(
		input,
		'cjs',
		output || '.',
		preprocessConfig,
		['none', 'js'].includes(preprocess?.trim()),
	);

	preprocessComponents(
		sourceDirectory,
		output || './',
		preprocessConfig,
		['none', 'js'].includes(preprocess?.trim()),
	);
};

const buildFiles = (
	entryPoint: string,
	format: 'esm' | 'cjs',
	destinationDirectory: string,
	preprocessConfig: any,
	avoidPreprocess: boolean,
) => {
	try {
		if (format === 'cjs') console.info('Building js file...');
		if (format === 'esm') console.info('Building mjs file...');

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
					preprocessor: avoidPreprocess
						? undefined
						: sveltePreprocess({
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
