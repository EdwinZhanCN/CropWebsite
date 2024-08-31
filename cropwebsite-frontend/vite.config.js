const { defineConfig } = require('vite')
const reactRefresh = require('@vitejs/plugin-react-refresh')
import { fileURLToPath, URL } from 'node:url'

module.exports = defineConfig({
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})