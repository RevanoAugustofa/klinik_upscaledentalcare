import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import vitePrerender from 'vite-plugin-prerender'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    vitePrerender({
      // Path ke folder hasil build Vite
      staticDir: path.join(path.dirname, 'dist'),
      
      // Daftar rute (URL path) yang ingin kamu prerender agar terbaca Google
      routes: ['/', '/about', '/contact'],
      
      // Menggunakan renderer Puppeteer (pastikan tersimpan atau gunakan opsi JSDOM)
      renderer: new vitePrerender.PuppeteerRenderer({
        skipThirdPartyRequests: true,
        // Beri jeda waktu agar DOM React selesai render sempurna
        renderAfterTime: 5000, 
      }), 
    }),
      tailwindcss(),
    ],
  
})

