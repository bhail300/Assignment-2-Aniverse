import { test, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
})

test.describe("Testing for list desktop", () => {
    test.skip("", async ({ page }) => {
        await page.goto('http://localhost:3000/animelist')

    })
})

test.describe("", () => {
    test.skip("", async ({ page }) => {
        await page.goto('http://localhost:3000/animelist')

    })
})