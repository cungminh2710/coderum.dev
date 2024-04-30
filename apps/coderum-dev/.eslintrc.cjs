/** @type {import("eslint").Linter.Config} */
const config = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
	},
	plugins: ['@typescript-eslint', 'drizzle'],
	extends: [
		'@repo/eslint-config/next.js',
	],
};

module.exports = config;
