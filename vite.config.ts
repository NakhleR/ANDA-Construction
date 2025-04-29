import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Get repository name to set base path for GitHub Pages
// If local development or not GitHub pages, this will be '/'
const getRepositoryName = (): string => {
  // Check if GitHub pages environment
  if (process.env.GITHUB_REPOSITORY) {
    const [, repo] = process.env.GITHUB_REPOSITORY.split('/')
    return `/${repo}/`
  }
  return '/'
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: getRepositoryName(),
}));
