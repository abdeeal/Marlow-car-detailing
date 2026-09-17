import sharp from "sharp";
import { copyFile } from "node:fs/promises";
for (const file of ["logo-dark.svg", "logo-light.svg", "mark.svg"])
  await copyFile("assets/brand/" + file, "public/brand/" + file);
for (const name of ["hero", "garage", "craft", "interior"]) {
  await sharp("public/photography/" + name + ".webp")
    .resize({ width: 768 })
    .webp({ quality: 82 })
    .toFile("public/photography/" + name + "-768.webp");
  await copyFile(
    "public/photography/" + name + ".webp.json",
    "public/photography/" + name + "-768.webp.json",
  );
}
console.log("Stock photography derivatives and logos prepared.");
