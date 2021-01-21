import mri from 'mri';
import { Arguments } from './models';

export const getArguments = (): Arguments => {
	const argv = process.argv.slice(2);
	const args = mri(argv, {
		alias: {
			i: 'input',
			o: 'output',
		},
	});

	return args;
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
