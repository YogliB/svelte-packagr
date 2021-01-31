# _svelte-packagr_

Usage:

`svelte-packagr [options]`

`svp [options]`

## options:

`--input (-i)`

**Required**

Path to the file to be built.

For example: `./src/Component.svelte`

`--output (-o)`

Destination folder.

For example: `./dist`

`--preprocess (-p)` 'all' (default) | 'svelte' | 'js' | 'none'

Enables [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess)'s auto preprocessing feature.

-   `svelte` - Preprocess only generated `.svelte` files.
-   `js` - Preprocess only generated `.js` and `.mjs` files.
-   `all` - Preprocess both (Default).
-   `none` - Don't preprocess.

`--config (-c)`

Path to `svelte-preprocess` config file.

If empty will point to `./svelte-preprocess.config.js`
