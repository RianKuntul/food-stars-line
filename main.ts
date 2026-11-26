import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// One-star alien review of Earth that still compliments the food.
// Single sentence, under 200 characters, no trailing newline.
const entry =
  "One star: this planet's gravity crushed my spine, its locals queue for everything, and yet the dumplings were so good I filed to extend my visa by one lifetime.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "entry.txt"), entry, "utf8");
