const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...');

// Check if dist folder exists
if (!fs.existsSync('dist')) {
  console.error('❌ dist folder not found. Please run "npm run build" first.');
  process.exit(1);
}

// Check if we're in a git repository
try {
  execSync('git status', { stdio: 'pipe' });
} catch (error) {
  console.error('❌ Not in a git repository. Please initialize git first.');
  process.exit(1);
}

console.log('✅ Build folder found');
console.log('✅ Git repository found');

// Add all files
console.log('📁 Adding files to git...');
execSync('git add .', { stdio: 'inherit' });

// Commit changes
console.log('💾 Committing changes...');
execSync('git commit -m "Deploy website update"', { stdio: 'inherit' });

// Push to GitHub
console.log('🚀 Pushing to GitHub...');
execSync('git push origin master', { stdio: 'inherit' });

console.log('🎉 Deployment complete!');
console.log('🌐 Your website will be available at: https://bereketfikre2021-sudo.github.io/Portfolio/');
console.log('⏱️  It may take 2-5 minutes for GitHub Pages to update.');
