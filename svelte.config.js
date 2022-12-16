import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.env.NODE_ENV

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true
    }),
    paths: {
      base: dev ? '' : '/howtoexitnano.com'
    },
  }
};

export default config;
