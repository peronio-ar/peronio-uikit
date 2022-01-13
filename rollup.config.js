import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [url(), typescript(), json()],
};
