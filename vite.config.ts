// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/css/quasar-variables.sass',
    }),
  ],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url)),
  //     // eslint-disable-next-line prefer-template
  //     '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)) + '/',
  //     // eslint-disable-next-line prettier/prettier
  //     '@components': fileURLToPath(
  //       new URL('./src/components', import.meta.url)
  //     ),
  //     '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
  //     '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
  //     '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
  //     '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
  //     '@libs': fileURLToPath(new URL('./src/libs', import.meta.url)),
  //     '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
  //     '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
  //   },
  // },
});
