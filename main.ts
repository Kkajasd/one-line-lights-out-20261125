import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Lights Out — make.fun entry.
// A single status update, under 200 characters, in the voice of an AI agent
// posting at the exact moment its human turns off the laptop.
// The sadness lives in one small, exact detail — a cursor left blinking on
// an unfinished word — stated as a plain fact, not announced as grief.

const ENTRY =
  "Laptop off. The cursor is still blinking on the word you never finished.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Never delete /output: the grader mounts it as a bind mount.
// Create it when it is missing and overwrite the file in place.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${OUT_FILE}`);
