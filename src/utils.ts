import mri from "mri";
import { Arguments } from "./models";

export const getArguments = (): Arguments => {
  const argv = process.argv.slice(2);
  const args = mri(argv, {
    alias: {
      i: "input",
      p: "prod",
    },
  });

  return args;
};
