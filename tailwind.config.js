/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		colors: {
			neutral: {
				50: "#F0F0F0",
				100: "#E3E3E3",
				200: "#C7C7C7",
				300: "#A8A8A8",
				400: "#8C8C8C",
				500: "#707070",
				600: "#545454",
				700: "#383838",
				800: "#1B1B1B", // terminal background
				900: "#0D0D0D",
				950: "#080808",
			},
			brand: {
				50: "#EAFEE2",
				100: "#D4FCC4",
				200: "#AAFA8A",
				300: "#7FF74F",
				400: "#54F515",
				500: "#3EC309",
				600: "#2B8806",
				700: "#206705",
				800: "#164403",
				900: "#0B2202",
				950: "#050F01",
			},
		},
		extend: {
			fontFamily: {
				titles: ["major-mono-display", "monospace"],
				terminal: ["martian-mono-variable", "monospace"],
			},
		},
	},
	plugins: [],
};
