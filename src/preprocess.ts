import { preprocess } from 'svelte/compiler';
import sveltePreprocess from 'svelte-preprocess';
import fs from 'fs';
import path from 'path';
import glob from 'glob';
import { sveltePreprocessBaseConfig } from './utils';
const sveltePreprocessConfig = require('./svelte-preprocess.config');

export const preprocessComponents = (srcDir: string, destDir: string) => {
	// source file paths
	const srcPath = path.join(__dirname, srcDir);

	// read glob of files in directory
	glob(path.join(srcPath, '**/*'), {}, async (error, files) => {
		// handling error
		if (error) {
			console.error('Unable to scan directory: ' + error);
			return;
		}

		// listing all files using forEach
		for (const file of files) {
			if (fs.lstatSync(file).isDirectory()) continue;

			// load file
			const sourceFile = fs.readFileSync(file, 'utf-8');
			const distFile = file.replace(`/${srcDir}/`, `/${destDir}/`);

			// create directory and file
			fs.mkdirSync(path.dirname(distFile), {
				recursive: true,
			});

			// process .svelte file
			if (file.endsWith('.svelte')) {
				// run autopreprocessor
				await parseSvelte(sourceFile, distFile);
			}
			// copy other files
			else {
				// copy static files
				fs.copyFileSync(file, distFile);
			}
		}
	});
};

const parseSvelte = async (source: string, destination: string) => {
	try {
		const item = await preprocess(
			source,
			sveltePreprocess({
				...sveltePreprocessBaseConfig,
				...(sveltePreprocessConfig || {}),
			}),
			{
				filename: path.basename(destination),
			},
		);

		// write compiled code to dist file
		fs.writeFileSync(destination, item.code);
	} catch (error) {
		console.error(error);
	}
};
