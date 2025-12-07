import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "import.meta.env.VITE_API_BASE_URL": JSON.stringify("https://contact-backend-v7b0.onrender.com")
  },
  base: "./",
});