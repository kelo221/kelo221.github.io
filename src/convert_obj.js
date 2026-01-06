
import { file, write } from "bun";
import { join } from "path";

// --- CONFIGURATION ---
const INPUT_FILENAME = "src/suzanne.obj";
const OUTPUT_FILENAME = "src/suzanne.js";
const Y_OFFSET = -0.5;
// ---------------------

const run = async () => {
    try {
        const cwd = process.cwd();
        const inputPath = join(cwd, INPUT_FILENAME);
        const outputPath = join(cwd, OUTPUT_FILENAME);

        console.log(`Reading from: ${inputPath}`);
        const inputFile = file(inputPath);
        const content = await inputFile.text();

        const lines = content.split("\n");
        const vertices = [];
        const faces = [];

        for (const line of lines) {
            const trimmed = line.trim();

            if (trimmed.startsWith("v ")) {
                const parts = trimmed.split(/\s+/);
                const x = parseFloat(parts[1]);
                const y = parseFloat(parts[2]);
                const z = parseFloat(parts[3]);

                if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
                    vertices.push({
                        x: x,
                        y: y + Y_OFFSET,
                        z: z
                    });
                }
            } else if (trimmed.startsWith("f ")) {
                // f v1/vt1/vn1 v2/vt2/vn2 v3/vt3/vn3 ...
                const parts = trimmed.split(/\s+/);
                const faceIndices = [];

                // Start from 1 because 0 is "f"
                // OBJ indices are 1-based, we need 0-based for JS arrays
                for (let i = 1; i < parts.length; i++) {
                    const indexPart = parts[i].split('/')[0];
                    const index = parseInt(indexPart, 10);
                    if (!isNaN(index)) {
                        faceIndices.push(index - 1);
                    }
                }
                if (faceIndices.length >= 3) {
                    faces.push(faceIndices);
                }
            }
        }

        let outputString = `// Model parsed from ${INPUT_FILENAME}\n`;

        // Export vertices
        outputString += `export const vs = [\n`;
        outputString += vertices.map(v =>
            `    {x: ${v.x.toFixed(6)}, y: ${v.y.toFixed(6)}, z: ${v.z.toFixed(6)}}`
        ).join(",\n");
        outputString += `\n];\n\n`;

        // Export faces
        outputString += `export const fs = [\n`;
        outputString += faces.map(f =>
            `    [${f.join(', ')}]`
        ).join(",\n");
        outputString += `\n];\n`;

        await write(outputPath, outputString);

        console.log(`Success! Converted ${vertices.length} vertices and ${faces.length} faces.`);
        console.log(`Saved to: ${outputPath}`);

    } catch (error) {
        console.error("Error:", error);
    }
};

run();
