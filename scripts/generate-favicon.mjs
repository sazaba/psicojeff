import sharp from "sharp";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("../public/Logo.webp", import.meta.url));
const target = fileURLToPath(new URL("../public/favicon.png", import.meta.url));

await sharp(source)
  .resize(512, 512, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 0 },
    withoutEnlargement: false,
  })
  .png({ compressionLevel: 9 })
  .toFile(target);

console.log("Generated Google-compatible favicon: public/favicon.png (512x512 PNG)");
