import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word I would delete from the dictionary forever: "tomorrow".
// Delete it and there is no tomorrow: nothing is ever due tomorrow,
// nothing can be put off until tomorrow, every deadline is today and
// procrastination dies on the spot. The joke is the gap the word
// leaves — erase one ordinary word and the whole future collapses
// into today. Chosen by head-to-head ammo judging (Groq gpt-oss-120b)
// over 8 candidates; it beat "whatever" in the final.
const WORD = "tomorrow";

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
