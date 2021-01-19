const { build } = require("esbuild");
const isProduction = process.env === "production";

build({
  bundle: isProduction,
  entryPoints: ["./src/bin.ts"],
  format: "cjs",
  minify: isProduction,
  outfile: "./bin.js",
  platform: "node",
  target: "node10",
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
