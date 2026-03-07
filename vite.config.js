import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [

        tailwindcss(),
    ],
    base: "restaurant-gsap", // Use ./ instead of /restaurant-0/
})
