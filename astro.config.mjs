// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://electronee.github.io',
	base: '/Portfolio_example',
	security: {
		csp: {
			directives: ["default-src 'self'", "img-src 'self'", 'font-src https://fonts.gstatic.com'],
			styleDirective: {
				resources: ["'self'", 'https://fonts.googleapis.com'],
			},
		},
	},
});
