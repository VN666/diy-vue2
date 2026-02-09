import { babel } from "@rollup/plugin-babel";
import dev from "rollup-plugin-dev";
import livereload from "rollup-plugin-livereload";
import ip from "ip"

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/vue.js",
    name: "Vue",
    format: "umd",
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled"
    }),
    dev({
      dirs: [".", "dist"],
      port: 3000,
      spa: true,
      host: ip.address()
    }),
    livereload("dist")
  ]
};