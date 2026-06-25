import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dirs = ['src/assets', 'public'];

async function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await processDir(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        const outPath = path.join(dir, path.basename(file, path.extname(file)) + '.webp');
        console.log(`Converting ${fullPath} to ${outPath}...`);
        try {
          await sharp(fullPath).webp({ quality: 80 }).toFile(outPath);
          console.log(`Successfully converted ${file}`);
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  }
}

async function run() {
  for (const dir of dirs) {
    if (fs.existsSync(dir)) {
      await processDir(dir);
    }
  }
  console.log("Done converting!");
}

run();
