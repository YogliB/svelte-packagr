/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	extends: '@snowpack/app-scripts-svelte',
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
	},
};
