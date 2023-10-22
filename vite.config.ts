// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'index.ts'),
      name: 'rc-textfield',
      // the proper extensions will be added
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true
    
  },
  plugins: [dts()]
})
