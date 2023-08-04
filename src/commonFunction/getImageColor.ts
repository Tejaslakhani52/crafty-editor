import { createCanvas, loadImage } from "canvas";

// Function to get the main 5 colors of an image
export async function getMainImageColors(imagePath: any) {
  const img = await loadImage(imagePath);
  const canvas = createCanvas(img.width, img.height);
  const context = canvas.getContext("2d");
  context.drawImage(img, 0, 0);

  const imageData = context.getImageData(0, 0, img.width, img.height).data;
  const pixelArray = Array.from(imageData);

  const pixelFrequency = new Map();
  const colorSet = new Set();

  for (let i = 0; i < pixelArray.length; i += 4) {
    const [r, g, b] = pixelArray.slice(i, i + 3);
    const color = `rgb(${r},${g},${b})`;

    if (pixelFrequency.has(color)) {
      pixelFrequency.set(color, pixelFrequency.get(color) + 1);
    } else {
      pixelFrequency.set(color, 1);
      colorSet.add(color);
    }
  }

  // Sort colors based on frequency in descending order
  const sortedColors = Array.from(colorSet).sort(
    (colorA, colorB) => pixelFrequency.get(colorB) - pixelFrequency.get(colorA)
  );

  // Return the main 5 colors
  return sortedColors.slice(0, 5);
}
