import { buildSync } from "esbuild";
import { gzipSizeSync } from "gzip-size";

[
	{
		format: "esm",
		outdir: "dist/esm",
	},
	{
		format: "cjs",
		outdir: "dist/cjs",
	},
	{
		format: "iife",
		keepNames: true,
		outdir: "dist/iife",
	},
].forEach((config) => {
	const result = buildSync({
		bundle: true,
		entryNames: "[dir]/[name]",
		entryPoints: ["index.js"],
		metafile: true,
		...config,
	});

	let total = 0;
	let totalGzip = 0;

	Object.keys(result.metafile.outputs).forEach((key) => {
		total = total + result.metafile.outputs[key].bytes;
		totalGzip = totalGzip + gzipSizeSync(key);
		console.log(
			key,
			formatBytes(result.metafile.outputs[key].bytes),
			"- gzip:",
			formatBytes(gzipSizeSync(key)),
		);
	});

	console.log(
		"Total:",
		formatBytes(total),
		"- gzip:",
		formatBytes(totalGzip),
		"\n",
	);
});

// https://stackoverflow.com/a/18650828
function formatBytes(a, b = 2) {
	if (0 === a) return "0 Bytes";
	const c = 0 > b ? 0 : b;
	const d = Math.floor(Math.log(a) / Math.log(1024));
	return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${
		["B", "KB", "MB", "GB"][d]
	}`;
}
