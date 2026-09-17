import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ reducedMotion: "reduce" });
await mkdir(".impeccable/review", { recursive: true });
for (const width of [320, 375, 768, 1440]) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto("http://localhost:3001");
  await page.evaluate(() => document.fonts.ready);
  for (const section of await page.locator("main > section").all())
    await section.scrollIntoViewIfNeeded();
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForFunction(() =>
    Array.from(document.images).every(
      (image) => image.complete && image.naturalWidth,
    ),
  );
  console.log(
    width,
    await page.evaluate(() => ({
      width: innerWidth,
      scroll: document.documentElement.scrollWidth,
      overflow: [...document.querySelectorAll("body *")]
        .map((e) => ({
          tag: e.tagName,
          class: e.className,
          right: e.getBoundingClientRect().right,
          left: e.getBoundingClientRect().left,
          width: e.getBoundingClientRect().width,
        }))
        .filter((e) => e.right > innerWidth + 1 || e.left < -1)
        .filter((e) => !String(e.class).includes("ribbon"))
        .slice(0, 15),
    })),
  );
  const name =
    width === 1440 ? "desktop" : width === 375 ? "mobile" : `user-${width}`;
  await page.screenshot({
    path: `.impeccable/review/${name}.png`,
    fullPage: true,
  });
  if (width === 375 || width === 1440)
    await page.screenshot({ path: `.impeccable/review/${name}-viewport.png` });
}
await browser.close();
