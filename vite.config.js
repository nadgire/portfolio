import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  server: {
    host: '0.0.0.0',  // Expose the dev server to the network
    port: 5173,        // You can specify a port (default is 5175, or whatever you prefer)
  },

})
