// rollup.config.js
import babel from 'rollup-plugin-babel';
import { eslint } from "rollup-plugin-eslint";
export default {
    input: 'src/canvas.js',
    output: {
        file: 'lib/canvas.js',
        format: 'umd',
        name: 'canvas'
    },

    plugins: [
        eslint({
            throwOnError: true
          }),
        babel({
            exclude: 'node_modules/**', // 仅仅转译我们的源码
            runtimeHelpers: true
        })
    ]
};
