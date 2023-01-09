import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// https://vitejs.dev/config/
function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    open: true,
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js'],
    alias: {
      '@': pathResolve('src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].${new Date().getTime()}.js`,
        chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
        assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
        compact: true,
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
        },
      },
    },
  },
});
