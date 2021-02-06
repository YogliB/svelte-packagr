# svelte-packagr

## A simple CLI for building svelte packages

## Disclaimer: Notice we didn't hit version 1 just yet, and the API may change

[![npm package version](https://badgen.net/npm/v/svelte-packagr)](https://npm.im/svelte-packagr)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](code-of-conduct.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

### Instalation

```bash
npm install -g svelte-packagr
```

### Usage

Long way:

```bash
svelte-packagr --input ./src/MyComponent.svelte --output ./dist
```

Shorthand:

```bash
svp -i ./src/MyComponent.svelte --o ./dist
```

### See all options

Run:

```bash
svp --help
```

or go [here](/blob/master/packages/svelte-packagr/help.md).
