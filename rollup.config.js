import { babel } from '@rollup/plugin-babel';

const config = {
  input: 'src/app.js',
  output: {
	file: 'build/bundle.js',
    format: 'iife'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};

export default config;
