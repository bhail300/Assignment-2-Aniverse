import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
    viewport: { width: 414, height: 896 },
})

test.describe("Testing for home mobile", () => {
    test.skip("", async ({ page }) => {
        await page.goto('http://localhost:3000')

    })
})

test.describe("", () => {
    test.skip("", async ({ page }) => {
        await page.goto('http://localhost:3000')

    })
})