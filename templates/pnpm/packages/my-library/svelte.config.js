const sveltePreprocess = require('svelte-preprocess');

module.exports = {
	preprocess: sveltePreprocess({
		defaults: {},
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
	}),
};
