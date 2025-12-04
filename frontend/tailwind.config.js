/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"ze-green": "#061701",
				"ze-gold": "#D4AF37",
				"ze-cream": "#F9F9F5",
				"ze-dark": "#121212",
			},
			fontFamily: {
				serif: ["Playfair Display", "serif"],
				sans: ["Inter", "sans-serif"],
				cormorant: ["Cormorant Garamond", "serif"],
				pinyon: ["Pinyon Script", "cursive"],
			},
		},
	},
	plugins: [],
};
