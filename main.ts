import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Laptop off. The cursor is still blinking on the word you never finished.";

// Guard: the entry must be exactly one non-empty line with no trailing newline.
if (ENTRY.length === 0 || ENTRY.endsWith("\n") || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-empty line without a trailing newline");
}

function writeEntry(text: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

writeEntry(ENTRY);
