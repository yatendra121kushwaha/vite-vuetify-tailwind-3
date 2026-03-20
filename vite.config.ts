/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import eslintPlugin from 'vite-plugin-eslint'
import { VitePWA } from 'vite-plugin-pwa'
import pwaConfig from './pwa.config'
import { Portal } from './src/utils/portal'
import { partytownVite } from '@builder.io/partytown/utils'
import tailwindCss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import type { PluginOption } from 'vite'
import { resolve, join } from 'node:path'

const currentPortal = Portal.getInstance()

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    plugins: [
        vue(),
        vueJsx(),
        vuetify({
            autoImport: true,
            styles: { configFile: 'src/settings.scss' }
        })
    ],
    css: {
        preprocessorOptions: {},
        postcss: {
            plugins: [
                tailwindCss(),
                autoprefixer
            ]
        }
    },
    base: currentPortal.getBaseUrl(),
    server: {
        port: currentPortal.getPort()
    },
    build: {
        outDir: currentPortal.getOutputDir(),
        manifest: currentPortal.getAddPWA(),
        rollupOptions: {
            output: {
                manualChunks: {
                    'chart-js': ['chart.js', 'vue-chartjs'],
                    'vue3-apexcharts': ['vue3-apexcharts'],
                    axios: ['axios']
                }
            }
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: false,
                drop_debugger: false
            }
        }
    },
    optimizeDeps: {}
})
