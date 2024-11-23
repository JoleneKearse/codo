import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	test: {
		include: ["**/*.test.{js,jsx}"],
		environment: "happy-dom",
		globals: true,
		setupFiles: ["@testing-library/jest-dom/vitest"],
	},
});
