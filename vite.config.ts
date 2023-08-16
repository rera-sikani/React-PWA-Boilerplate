import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true,
			},
			includeAssets: [
				'/offline.html',
				'/favicon.png',
				'/apple-touch-icon.png',
			],
			manifest: {
				"theme_color": "#1e90ff",
				"background_color": "#1e90ff",
				"display": "standalone",
				"scope": "/",
				"start_url": "/",
				"name": "PWA Template",
				"short_name": "PWA",
				"description": "Template of PWA Project",
				"icons": [
					{
						"src": "/icon/icon-192x192.png",
						"sizes": "192x192",
						"type": "image/png"
					},
					{
						"src": "/icon/icon-256x256.png",
						"sizes": "256x256",
						"type": "image/png"
					},
					{
						"src": "/icon/icon-384x384.png",
						"sizes": "384x384",
						"type": "image/png"
					},
					{
						"src": "/icon/icon-512x512.png",
						"sizes": "512x512",
						"type": "image/png",
						"purpose": "any maskable",
					}
				]
			}
		})
	],
})
