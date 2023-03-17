import {
    defineConfig
} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~/resources/sass/_variables.scss";`
        // additionalData: `@import "~@/assets/styles/variables.scss";`
        // @import '../../sass/_variables.scss';
      },
    }
  },
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
});
