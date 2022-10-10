import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

export default defineConfig({
	resolve: {
		alias: {
			"vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js",
		},
	},
	plugins: [
		tsconfigPaths(),
		vue(),
		vueI18n({
			include: resolve(dirname(fileURLToPath(import.meta.url)), "./src/locales/**"),
		}),
	],
});
