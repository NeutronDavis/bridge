import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home has no basic detectable accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(results.violations).toEqual([]);
});

test("production export runs under CSP without console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", message => { if (message.type() === "error") errors.push(`${message.text()} ${message.location().url}`); });
  page.on("response", response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  page.on("requestfailed", request => errors.push(`FAILED ${request.url()} ${request.failure()?.errorText}`));
  await page.goto("/");
  await page.getByRole("link", { name: "Explore the Platform" }).first().click();
  expect(errors).toEqual([]);
});

test("keyboard navigation reaches main content", async ({ page }) => {
  await page.goto("/"); await page.keyboard.press("Tab");
  await expect(page.getByText("Skip to main content")).toBeFocused();
  await page.keyboard.press("Enter"); await expect(page.locator("#main-content")).toBeFocused();
});

test("mobile navigation opens and closes accessibly", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile-only interaction"); await page.goto("/");
  const menu = page.getByRole("button", { name: /navigation/ }); await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true"); await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false"); await expect(menu).toBeFocused();
});
