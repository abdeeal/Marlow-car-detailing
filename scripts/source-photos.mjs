import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";
const pages = [
  [
    "craft",
    "https://unsplash.com/photos/a-man-polishing-the-side-of-a-green-sports-car-yA3Rb0krauM",
  ],
  [
    "hero",
    "https://unsplash.com/photos/orange-porsche-911-on-road-during-daytime-sUqYDz3iMqs",
  ],
  [
    "garage",
    "https://unsplash.com/photos/black-porsche-911-parked-in-garage-i2l7xcV5kIQ",
  ],
  [
    "interior",
    "https://unsplash.com/photos/a-steering-wheel-and-dashboard-of-a-car-SlK-8hFyKO0",
  ],
];
await mkdir("public/photography", { recursive: true });
for (const [name, page] of pages) {
  const html = await (await fetch(page)).text();
  const urls = [
    ...html.matchAll(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/g),
  ].map((m) => m[0]);
  console.log(name, [...new Set(urls)].slice(0, 4));
  if (!urls.length) throw new Error("No source photo: " + page);
  const url = urls[0] + "?auto=format&fit=crop&w=2000&q=85";
  const response = await fetch(url);
  if (!response.ok) throw new Error("Photo HTTP " + response.status);
  const buffer = Buffer.from(await response.arrayBuffer());
  await sharp(buffer)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile("public/photography/" + name + ".webp");
  await writeFile(
    "public/photography/" + name + ".source.json",
    JSON.stringify(
      { page, url, kind: "stock photograph", generation: false },
      null,
      2,
    ),
  );
}
