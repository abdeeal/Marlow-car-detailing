import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, readFile } from "node:fs/promises";
test("service choice works with keyboard and carries through to the detail brief", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  const first = page.getByRole("tab", { name: "Interior Detail", exact: true });
  await first.focus();
  await page.keyboard.press("ArrowRight");
  await expect(
    page.getByRole("tab", { name: "Exterior Detail", exact: true }),
  ).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("£85");
  await page
    .getByRole("tab", { name: "Ceramic Protection", exact: true })
    .click();
  await expect(page.getByRole("tabpanel")).toContainText("£450");
  await page
    .getByRole("link", { name: "Choose Ceramic Protection", exact: true })
    .click();
  await expect(page.locator("#service")).toHaveValue("ceramic");
  await page.getByRole("button", { name: "Save my detail brief" }).click();
  await expect(page.locator("#vehicle")).toBeFocused();
  await expect(page.locator("#brief-error")).toContainText("make and model");
  await page.locator("#vehicle").fill("BMW M4");
  await page.locator("#notes").fill("Focus on paintwork");
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Save my detail brief" }).click();
  const file = await download;
  expect(file.suggestedFilename()).toBe("marlow-detail-brief.txt");
  const content = await readFile((await file.path())!, "utf8");
  expect(content).toContain("BMW M4");
  expect(content).toContain("Ceramic Protection");
  expect(content).toContain("£450");
  await expect(page.getByRole("status")).toContainText("brief is ready");
  await expect(page.locator("#vehicle")).toHaveValue("BMW M4");
  expect(errors).toEqual([]);
});
test("mobile navigation, FAQ, privacy and recovery work", async ({
  page,
  request,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu", exact: true });
  await menu.click();
  await expect(page.locator("#mobile-nav")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .locator("#mobile-nav")
    .getByRole("link", { name: "Services", exact: true })
    .click();
  await expect(page.locator("#mobile-nav")).toBeHidden();
  const faq = page.locator("summary").first();
  await faq.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  await page.getByRole("link", { name: "Privacy & photo credits" }).click();
  await expect(page.locator("h1")).toContainText("Privacy & photo credits");
  const response = await request.get("/missing-route");
  expect(response.status()).toBe(404);
  await page.goto("/missing-route");
  await expect(page.locator("h1")).toContainText("wrong turn");
});
test("responsive evidence, image loading, reduced motion and accessibility", async ({
  page,
}) => {
  await mkdir(".impeccable/review", { recursive: true });
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    for (const section of await page.locator("main > section").all())
      await section.scrollIntoViewIfNeeded();
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForFunction(() =>
      Array.from(document.images).every(
        (image) => image.complete && image.naturalWidth > 0,
      ),
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    expect(await page.locator("body").innerText()).not.toMatch(
      /fictional|demo|AI-generated|sample testimonial|portfolio concept/i,
    );
    const name =
      width === 1440 ? "desktop" : width === 375 ? "mobile" : `user-${width}`;
    await page.screenshot({
      path: `.impeccable/review/${name}.png`,
      fullPage: true,
    });
    if (width === 1440 || width === 375)
      await page.screenshot({
        path: `.impeccable/review/${name}-viewport.png`,
      });
  }
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(audit.violations).toEqual([]);
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});
