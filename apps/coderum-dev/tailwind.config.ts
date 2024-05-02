import twConfig from '@repo/ui/tailwind.config';
import type { Config } from 'tailwindcss';

const config: Config = { ...twConfig, content: ['./src/**/*.tsx', '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'] };

export default config;
