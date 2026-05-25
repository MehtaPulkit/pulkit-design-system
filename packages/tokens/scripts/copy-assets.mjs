import { mkdir, copyFile } from "node:fs/promises";

await mkdir("dist/css", { recursive: true });
await copyFile("src/tokens.css", "dist/css/tokens.css");
await copyFile("src/tokens.json", "dist/tokens.json");
