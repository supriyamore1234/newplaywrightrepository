const { test, chromium } = require('@playwright/test');

test('Window handling', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://prafpawar11.github.io/multiplewindows.html');

    await page.locator("//input[@name='fname']").fill('Ankit');

    const [saucePage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("//a[text()='SauceDemo Link']").click()
    ]);

    await saucePage.waitForLoadState();
    await saucePage.locator('#user-name').fill('standard_user');
    await saucePage.locator('#password').fill('secret_sauce');
    await saucePage.locator('#login-button').click();
    console.log("Jenkins Configuration is completed  ")
    
});