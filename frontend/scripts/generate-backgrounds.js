/**
 * Generate Placeholder Background Images
 * 
 * This script creates three placeholder gradient backgrounds for the theme switcher.
 * These are temporary placeholders - replace with actual high-quality images for production.
 * 
 * Run: node scripts/generate-backgrounds.js
 */

const fs = require('fs');
const path = require('path');

// SVG gradients for each theme
const backgrounds = {
  bg1: {
    name: 'Ocean Breeze',
    gradient: `
      <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f093fb;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#grad1)" />
      </svg>
    `
  },
  bg2: {
    name: 'Sunset Glow',
    gradient: `
      <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fa709a;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#fee140;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#30cfd0;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#grad2)" />
      </svg>
    `
  },
  bg3: {
    name: 'Night Sky',
    gradient: `
      <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0f0c29;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#302b63;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#24243e;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#grad3)" />
      </svg>
    `
  }
};

const publicDir = path.join(__dirname, '..', 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate SVG files (can be used directly or converted to JPG)
Object.keys(backgrounds).forEach(key => {
  const filePath = path.join(publicDir, `${key}.svg`);
  fs.writeFileSync(filePath, backgrounds[key].gradient.trim());
  console.log(`✓ Generated ${key}.svg (${backgrounds[key].name})`);
});

console.log('\n📝 Note: SVG placeholders created. For production:');
console.log('   1. Replace with high-quality JPG images (1920x1080+)');
console.log('   2. Optimize images using TinyPNG or Squoosh');
console.log('   3. See public/BACKGROUNDS.md for recommendations');
console.log('\n💡 SVGs will work for now, but JPGs are recommended for better performance.');
