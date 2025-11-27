import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        onSurfaceLight: 'var(--on-surface-light)',
        onSurface: 'var(--on-surface)',
        onSurfaceDisabled: 'var(--on-surface-disabled)',
        onSurfaceMedium: 'var(--on-surface-medium)'
      },
      bg: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        onPrimary: 'var(--on-primary)',
        onSurfaceLight: 'var(--on-surface-light)'
      },
      text: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        onSurface: 'var(--on-surface)',
        onSurfaceMedium: 'var(--on-surface-medium)',
        onSurfaceDisabled: 'var(--on-surface-disabled)'
      }
    }
  },
  plugins: []
};
export default config;
