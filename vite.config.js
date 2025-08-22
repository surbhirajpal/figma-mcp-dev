import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      compositions: path.resolve(__dirname, 'src/ui/compositions'),
      hooks: path.resolve(__dirname, 'src/ui/hooks'),
      icons: path.resolve(__dirname, 'src/ui/icons'),
      images: path.resolve(__dirname, 'src/ui/images'),
      layout: path.resolve(__dirname, 'src/ui/layout'),
      primitives: path.resolve(__dirname, 'src/ui/primitives'),
      providers: path.resolve(__dirname, 'src/ui/providers'),
      utils: path.resolve(__dirname, 'src/ui/utils'),
    },
  },
})
