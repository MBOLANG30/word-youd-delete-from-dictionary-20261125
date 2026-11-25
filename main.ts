import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word I would delete from the dictionary forever: "irregardless".
// It is the dictionary's own impostor — a double-negative mash-up of
// "irrespective" and "regardless" that means the opposite of what its
// extra prefix pretends to say, yet somehow got a dictionary entry.
// Delete it and the language loses nothing: "regardless" already does
// the whole job, correctly — and every time someone says "irregardless",
// a dictionary editor somewhere quietly winces. The joke is the word
// itself: a word that should never have been in the dictionary at all.
const WORD = "irregardless";

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
