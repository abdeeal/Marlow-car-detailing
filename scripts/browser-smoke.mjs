import { chromium, firefox, webkit, devices } from "@playwright/test";
import assert from "node:assert/strict";
const targets = [
  ["Chrome", chromium, { channel: "chrome" }, {}],
  ["Edge", chromium, { channel: "msedge" }, {}],
  ["Firefox", firefox, {}, {}],
  ["Mobile Chrome", chromium, {}, devices["Pixel 7"]],
  ["Mobile WebKit", webkit, {}, devices["iPhone 13"]],
];
for (const [name, engine, launch, viewport] of targets) {
  let browser;
  try {
    browser = await engine.launch({ headless: true, ...launch });
    const page = await browser.newPage(viewport);
    await page.goto(process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000");
    await page
      .getByRole("tab", { name: "Ceramic Protection", exact: true })
      .click();
    await page
      .getByRole("link", { name: "Choose Ceramic Protection", exact: true })
      .click();
    assert.equal(await page.locator("#service").inputValue(), "ceramic");
    await page.locator("#vehicle").fill("BMW M4");
    const download = page.waitForEvent("download");
    await page.getByRole("button", { name: "Save my detail brief" }).click();
    assert.equal(
      (await download).suggestedFilename(),
      "marlow-detail-brief.txt",
    );
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
    );
    console.log(name + ": PASS");
  } catch (error) {
    console.error(name + ": FAIL " + error.message);
    process.exitCode = 1;
  } finally {
    await browser?.close();
  }
}
