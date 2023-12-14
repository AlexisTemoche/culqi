import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/culqi/',
  plugins: [
    VitePWA({ 
      injectRegister: 'script',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      manifest: {
        name: 'My Culqui App',
        short_name: 'CulquiApp',
        description: 'My culqui App is a technical test',
        theme_color: '#000000',
        icons: [
          {
            src: 'logo_black.png',
            sizes: '118x36',
            type: 'svg'
          },
          {
            src: 'logo_white.png',
            sizes: '118x36',
            type: 'svg'
          }
        ]
      }
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
