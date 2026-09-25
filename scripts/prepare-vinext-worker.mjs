import { existsSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const serverDirectory = join(process.cwd(), "dist", "server");
const generatedEntry = join(serverDirectory, "index.mjs");
const handlerEntry = join(serverDirectory, "vinext-handler.mjs");

if (!existsSync(generatedEntry)) {
  throw new Error(`Vinext entrypoint not found at ${generatedEntry}`);
}

if (existsSync(handlerEntry)) {
  rmSync(handlerEntry, { force: true });
}

renameSync(generatedEntry, handlerEntry);
writeFileSync(
  generatedEntry,
  `import handler from "./vinext-handler.mjs";\n\nexport default {\n  fetch(request, _env, ctx) {\n    return handler(request, ctx);\n  },\n};\n`,
  "utf8",
);
