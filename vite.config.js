import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig(({ command }) => ({
  plugins: [react(), eslint()],
  base: command === 'build' ? '/Crusto-Pizza/' : '/',
}));
