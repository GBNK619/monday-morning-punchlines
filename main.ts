// Monday Morning Punchlines — make.fun entry
// Writes one joke about Monday mornings to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Monday asked how my weekend was. I said, 'Ask Friday — it was the last one who saw me happy.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate validation: the entry must be 1-200 characters and not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${LINE.length} characters`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} characters): ${LINE}`);
