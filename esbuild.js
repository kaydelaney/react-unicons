require("esbuild")
  .build({
    bundle: true,
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    entryPoints: ["index.ts"],
    external: ["react"],
    format: "cjs",
    minify: true,
    outfile: "lib/cjs/index.js",
  })
  .catch(() => process.exit(1));
