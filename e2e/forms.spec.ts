import { expect, test } from "@playwright/test";

test("contact validates and submits successfully", async ({ page }) => {
  await page.goto("/contact/");
  await page.getByRole("button", { name: "Send Enquiry" }).click();
  await expect(page.locator(".form-status[role='alert']")).toContainText("highlighted");
  await page.getByLabel("Full name").fill("Ada Okafor");
  await page.getByLabel("Email").fill("invalid");
  await page.getByLabel("Enquiry type").selectOption("Pricing");
  await page.getByLabel("Message").fill("Please share a tailored quotation.");
  await page.getByRole("button", { name: "Send Enquiry" }).click();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
  await page.getByLabel("Email").fill("ada@example.com");
  await page.getByRole("button", { name: "Send Enquiry" }).click();
  await expect(page.getByRole("status")).toContainText("Thank you for contacting us");
});

test("demo requires consent and completes the configured static flow", async ({ page }) => {
  await page.goto("/request-demo/");
  await page.getByLabel("Full name").fill("Ada Okafor");
  await page.getByLabel("Company").fill("Example Ltd");
  await page.getByLabel("Work email").fill("ada@example.com");
  await page.getByLabel("Phone").fill("+234 800 000 0000");
  await page.getByLabel("Industry").selectOption("Professional Services");
  await page.getByLabel("Organisation size").selectOption("50–199 employees");
  await page.getByLabel("Core Platform").check();
  await page.getByRole("button", { name: "Request a Demonstration" }).click();
  await expect(page.getByText("You must consent to being contacted.")).toBeVisible();
  await page.getByLabel(/I consent/).check();
  await page.getByRole("button", { name: "Request a Demonstration" }).click();
  await expect(page).toHaveURL(/\/request-demo\/success\/?$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Thank you");
});

test("honeypot submissions are rejected before the network", async ({ page }) => {
  let submissions = 0;
  page.on("request", request => { if (request.method() === "POST") submissions += 1; });
  await page.goto("/contact/");
  await page.getByLabel("Full name").fill("Ada Okafor");
  await page.getByLabel("Email").fill("ada@example.com");
  await page.getByLabel("Enquiry type").selectOption("Pricing");
  await page.getByLabel("Message").fill("Please share a tailored quotation.");
  await page.locator("#website").fill("robot", { force: true });
  await page.getByRole("button", { name: "Send Enquiry" }).click();
  await expect(page.locator(".form-status[role='alert']")).toBeVisible();
  expect(submissions).toBe(0);
});
