import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js');

if (process.env.APP_ENV === 'development') {
	console.log('Setting up dev platform for cloudflare')
	await setupDevPlatform();
}

/** @type {import("next").NextConfig} */
const config = {
	transpilePackages: ['@repo/ui'],
};

export default config;
