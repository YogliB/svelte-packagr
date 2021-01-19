import mri from "mri";
import { build } from "esbuild";

const argv = process.argv.slice(2);
const args = mri(argv, {
  alias: {
    i: "input",
    p: "prod",
  },
});

console.log(args);
