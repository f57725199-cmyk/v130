const fs = require('fs');
const filePath = 'syllabus_data.ts';
let data = fs.readFileSync(filePath, 'utf8');

// Find split points
const index11 = data.indexOf("'11': [");
const index12 = data.indexOf("'12': [");

if (index11 === -1 || index12 === -1) {
    console.log("Error: Could not find Class 11 or 12 sections");
    process.exit(1);
}

const part1 = data.substring(0, index11);
const part11 = data.substring(index11, index12);
const part12 = data.substring(index12);

const bioEntry = '\n                { subject: "Biology", topics: ["Syllabus details coming soon"] },';

// Replace in part 11
const newPart11 = part11.replace(/subjects:\s*\[/g, `subjects: [${bioEntry}`);

// Replace in part 12
const newPart12 = part12.replace(/subjects:\s*\[/g, `subjects: [${bioEntry}`);

const finalData = part1 + newPart11 + newPart12;

fs.writeFileSync(filePath, finalData);
console.log("Successfully added Biology to Class 11 and 12");
