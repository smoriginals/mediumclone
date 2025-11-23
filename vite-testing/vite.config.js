import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // esbuild: {
    //     loader: 'jsx',            // 👈 parse JSX in .js files
    //     include: /src\/.*\.js$/,   // 👈 apply only to .js inside /src
    // },
})
