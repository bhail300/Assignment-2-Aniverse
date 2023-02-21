import { test, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
})


test.describe("Checking the meta tag", () => {
    test("", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const metaDescription = page.locator('meta[property="og:description"]');
        await expect(metaDescription).toHaveAttribute('content', 'An app that lists anime.')

    })
})

test.describe("", () => {
    test.skip("", async ({ page }) => {
        await page.goto('http://localhost:3000')

    })
})