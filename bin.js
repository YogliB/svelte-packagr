var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __exportStar = (target, module2, desc) => {
  __markAsModule(target);
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true}), module2);
};

// src/bin.ts
var esbuild = __toModule(require("esbuild"));

// src/utils.ts
var mri = __toModule(require("mri"));
var getArguments = () => {
  const argv = process.argv.slice(2);
  const args = mri.default(argv, {
    alias: {
      i: "input",
      d: "dest"
    }
  });
  return args;
};

// src/bin.ts
var esbuild_svelte = __toModule(require("esbuild-svelte"));
var autoProcess = __toModule(require("svelte-preprocess/dist/autoProcess"));
var sveltePreprocessConfig = require("./svelte-preprocess.config");
var main = async () => {
  const {dest, input} = getArguments();
  if (!(input == null ? void 0 : input.trim())) {
    console.error("Input file missing");
    process.exit(1);
  }
  buildFiles(input, "esm", dest || ".");
  buildFiles(input, "cjs", dest || ".");
};
var buildFiles = (entryPoint, format, distDir) => {
  try {
    const outfile = `${distDir}/${format === "cjs" ? "index.js" : "index.mjs"}`;
    esbuild.build({
      bundle: true,
      entryPoints: [entryPoint],
      format,
      minify: true,
      outfile,
      platform: "browser",
      target: "esnext",
      plugins: [
        esbuild_svelte.default({
          compileOptions: {dev: false, css: true},
          preprocessor: autoProcess.sveltePreprocess({
            babel: true,
            postcss: {
              plugins: [require("autoprefixer")]
            },
            ...sveltePreprocessConfig || {}
          })
        })
      ]
    });
    return true;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
main();
