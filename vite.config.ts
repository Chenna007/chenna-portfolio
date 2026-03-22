import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    optimizeDeps: {
      exclude: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'framer-motion', 'motion/react'],
    },
    build: {
      rollupOptions: {
        external: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime'],
      },
    },
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        'react': 'https://esm.sh/react@19',
        'react-dom': 'https://esm.sh/react-dom@19',
        'react-dom/client': 'https://esm.sh/react-dom@19/client',
        'react/jsx-runtime': 'https://esm.sh/react@19/jsx-runtime',
        'framer': path.resolve(__dirname, 'src/framer-mock.ts'),
        'framer-motion': 'https://esm.sh/framer-motion@12?external=react,react-dom',
        'motion/react': 'https://esm.sh/framer-motion@12?external=react,react-dom',
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
