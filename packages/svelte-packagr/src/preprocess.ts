import { preprocess } from 'svelte/compiler';
import sveltePreprocess from 'svelte-preprocess';
import { lstat, readFile, mkdir, copyFile, writeFile } from 'fs/promises';
import { join, dirname, basename } from 'path';
import glob from 'glob';
import { sveltePreprocessBaseConfig } from './utils';

export const preprocessComponents = (
	srcDir: string,
	destDir: string,
	preprocessConfig: { [key: string]: any },
	avoidPreprocess: boolean,
) => {
	if (avoidPreprocess) console.info('Coping files...');
	if (!avoidPreprocess) console.info('Preprocessing files...');

	// read glob of files in directory
	glob(join(srcDir, '**/*'), {}, async (error, files) => {
		// handling error
		if (error) {
			console.error('Unable to scan directory: ' + error);
			return;
		}

		// listing all files using forEach
		for (const file of files) {
			if ((await lstat(file)).isDirectory()) continue;

			// load file
			const sourceFile = await readFile(file, 'utf-8');
			const distFile = file.replace(srcDir, destDir);

			// create directory and file
			mkdir(dirname(distFile), {
				recursive: true,
			});

			// process .svelte file
			if (file.endsWith('.svelte') && !avoidPreprocess) {
				// run autopreprocessor
				await parseSvelte(sourceFile, distFile, preprocessConfig);
			}
			// copy other files
			else {
				// copy static files
				await copyFile(file, distFile);
			}
		}
	});
};

const parseSvelte = async (
	source: string,
	destination: string,
	preprocessConfig: any,
) => {
	try {
		const item = await preprocess(
			source,
			sveltePreprocess({
				...sveltePreprocessBaseConfig,
				...preprocessConfig,
			}),
			{
				filename: basename(destination),
			},
		);

		// write compiled code to dist file
		await writeFile(destination, item.code);
	} catch (error) {
		console.error(error);
	}
};
