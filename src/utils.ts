import mri from 'mri';
import { Arguments } from './models';

export const getArguments = (): Arguments => {
	const argv = process.argv.slice(2);
	const { input, output, preprocess } = mri(argv, {
		alias: {
			i: 'input',
			o: 'output',
			p: 'preprocess',
		},
	});

	return { input, output, preprocess };
};

export const sveltePreprocessBaseConfig = {
	babel: {
		presets: [
			[
				'@babel/preset-env',
				{
					loose: true,
					modules: false,
					targets: {
						esmodules: true,
					},
				},
			],
		],
	},
	postcss: {
		plugins: [require('autoprefixer')],
	},
};
