import { readdir } from "node:fs/promises";
import { join } from "path";

const directoryPath = './src/lib/data/projects'; // Change this to your directory path
const outputPath= './src/lib/data/projects.json';

// Function to read all JSON files from a directory and combine them
async function combineJsonFiles(dirPath: string): Promise<string[]> {
    const files = await readdir(dirPath);
    const jsonArray: string[] = [];

    for (const file of files) {
        if (file.endsWith('.json')) {
            const filePath = join(dirPath, file);
            const bunFile = Bun.file(filePath);
            try {
                const jsonData = await bunFile.json();
                jsonArray.push(jsonData);
            } catch (err) {
                console.error(`Error parsing JSON file: ${filePath}`, err);
            }
        }
    }

    return jsonArray;
}

// Usage example
(async () => {
    try {
        const combinedJson = await combineJsonFiles(directoryPath);
        console.log("Created combined JSON: ", combinedJson.length," files combined!");
        
        // Write the combined JSON to a file
        await Bun.write(outputPath, JSON.stringify(combinedJson));
    } catch (error) {
        console.error("Error combining JSON files:", error);
    }
})();