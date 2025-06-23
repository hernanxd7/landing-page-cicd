import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 cambia esto según tu repositorio
const repoName = 'landing-page-cicd'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // 👈 esta línea es clave
})
