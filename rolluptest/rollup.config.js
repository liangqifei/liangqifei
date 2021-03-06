import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import babel from '@rollup/plugin-babel';
export default [
  // browser-friendly UMD build
  {
    input: 'src/main.js',
    output: {
      name: 'howLongUntilLunch',
      file: pkg.umd,
      format: 'umd'
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      babel({ babelHelpers: 'bundled' }),
      commonjs() // so Rollup can convert `ms` to an ES module
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/main.js',
    external: ['react'],
    output: [
      { file: pkg.cjs, format: 'cjs' },
      { file: pkg.esm, format: 'es' }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      babel({ babelHelpers: 'bundled' }),
      commonjs() // so Rollup can convert `ms` to an ES module
    ]
  }
];