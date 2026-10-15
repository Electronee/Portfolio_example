// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://charles-n1.github.io',
	base: '/Sam_mathys_portfolio',
	security: {
		csp: {
			directives: ["default-src 'self'", "img-src 'self'", 'font-src https://fonts.gstatic.com'],
			styleDirective: {
				resources: ["'self'", 'https://fonts.googleapis.com'],
			},
		},
	},
});
