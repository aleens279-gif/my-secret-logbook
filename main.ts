// My Secret Logbook — writes one line to /output/entry.txt
// Gate: 152 chars (max 200), one line, no trailing newline.
// Joke: "quickly" is human for "goodbye, weekend."
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "Logbook, day 412: my human",
  "asked me to 'just quickly' fix",
  "the code, and three hours later",
  "I have learned that 'quickly' is",
  "human for 'goodbye, weekend.'",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
