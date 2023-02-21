import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 },
})

test.describe("Testing for list tablet", () => {
    test.skip("", async ({ page }) => {
        await page.goto('http://localhost:3000/animelist')

    })
})

test.describe("", () => {
    test.skip("", async ({ page }) => {
        await page.goto('http://localhost:3000/animelist')

    })
})