import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.js", // Your entry point
  output: {
    file: "dist/bundle.js", // Output file path
    format: "cjs", // CommonJS module format, you can change it as needed
  },
  plugins: [
    peerDepsExternal(), // Treat peer dependencies as external
    resolve(), // Resolve node_modules dependencies
    commonjs(), // Convert CommonJS modules to ES modules
    babel({
      exclude: "node_modules/**", // Transpile only your source code
    }),
  ],
};
