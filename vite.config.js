import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath =
  process.env.PAGES_BASE_PATH ||
  (process.env.GITHUB_ACTIONS === 'true' && repoName ? `/${repoName}/` : '/');

export default defineConfig({
  plugins: [react()],
  base: basePath,
});
