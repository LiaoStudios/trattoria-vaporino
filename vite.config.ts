import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Minimal declaration so we can read PORT without pulling in @types/node.
declare const process: { env: Record<string, string | undefined> }

// Honor a PORT assigned by the harness/preview tool; fall back to 5175 locally.
export default defineConfig({
  base: '/trattoria-vaporino/',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5175,
    strictPort: false,
  },
})
