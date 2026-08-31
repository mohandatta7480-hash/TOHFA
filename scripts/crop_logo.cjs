const sharp = require('sharp');
const fs = require('fs');

async function cropCircularLogo() {
  const inputPath = 'C:/Users/mohan/.gemini/antigravity/brain/6291ffa7-d5f8-4684-8adf-5242105bb168/.user_uploaded/media_1788186905896.png';
  const size = 676;
  const radius = size / 2;
  
  // Create circular SVG mask
  const circleMask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${radius}" cy="${radius}" r="${radius}" fill="white" /></svg>`
  );
  
  // Crop the exact circle region and composite with circular mask
  await sharp(inputPath)
    .extract({ left: 174, top: 174, width: size, height: size })
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toFile('public/images/logo.png');
    
  console.log('Saved public/images/logo.png successfully!');
}

cropCircularLogo();