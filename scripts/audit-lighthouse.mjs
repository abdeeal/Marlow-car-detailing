import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const output = path.resolve(".impeccable/review");
await mkdir(output, { recursive: true });
await mkdir(path.resolve(".impeccable/lighthouse-profile"), {
  recursive: true,
});
// An explicit task-owned profile avoids Chrome temporary-profile cleanup races on Windows.
const chrome = await launch({
  userDataDir: path.resolve(".impeccable/lighthouse-profile"),
  chromeFlags: ["--headless", "--disable-gpu"],
});
try {
  const result = await lighthouse("http://localhost:3000", {
    port: chrome.port,
    output: "json",
    logLevel: "error",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  });
  await writeFile(path.join(output, "lighthouse-mobile.json"), result.report);
  console.log(
    JSON.stringify(
      Object.fromEntries(
        Object.entries(result.lhr.categories).map(([key, value]) => [
          key,
          value.score * 100,
        ]),
      ),
      null,
      2,
    ),
  );
} finally {
  await chrome.kill();
}
