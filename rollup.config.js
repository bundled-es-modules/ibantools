import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './node_modules/ibantools/jsnext/ibantools.js',
    output: {
      file: './ibantools.js',
      format: 'es',
    },
    plugins: [
      commonjs(),
    ],
  },
];
