import reactRefresh from '@vitejs/plugin-react-refresh'
import { fileURLToPath, URL } from 'node:url'
import {defineConfig} from "vite";

module.exports = defineConfig({
    base: '/',
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        host: 'localhost',
        port: 3456,
    }
})