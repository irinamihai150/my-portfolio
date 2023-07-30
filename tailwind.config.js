/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Edu SA Beginner",
					"Montserrat",
					...defaultTheme.fontFamily.sans,
				],
				body: ["Arial", "sans-serif"],
			},
		},
	},
	plugins: [],
}
