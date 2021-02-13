/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	extends: '@snowpack/app-scripts-svelte',
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
		packages: { url: '/packages' },
	},
	alias: {
		'my-library': './packages/my-library/src/index.js',
	},
};
