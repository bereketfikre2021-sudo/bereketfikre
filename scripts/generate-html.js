import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate HTML with correct base path for production
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/bereketfikre' : '';

// Read the current index.html
const htmlPath = path.join(__dirname, '../index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Replace favicon paths
htmlContent = htmlContent.replace(
  /href="\/bereketfikre\//g, 
  `href="${basePath}/`
);

htmlContent = htmlContent.replace(
  /content="\/bereketfikre\//g, 
  `content="${basePath}/`
);

// Write back to index.html
fs.writeFileSync(htmlPath, htmlContent);

console.log(`Updated HTML with base path: ${basePath || 'none'}`);
