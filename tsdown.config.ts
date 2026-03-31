import { defineConfig } from "tsdown";

export default defineConfig([
	{
		entry: { index: "./src/index.ts" },
		outDir: ".netlify/functions/index",
		noExternal: [/.*/],
		external: ["node:*", "@libsql/*", "@libsql/client", "@netlify/functions", "drizzle-orm", "drizzle-orm/*"],
		shims: true,
		clean: true,
	},
	{
		dts: true,
		format: ["esm", "cjs"],
		entry: ["./src/client.ts"],
		outDir: "./dist",
		clean: true,
	},
]);
