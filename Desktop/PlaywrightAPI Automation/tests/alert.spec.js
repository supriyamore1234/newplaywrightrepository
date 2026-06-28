import{test,expect,chromium} from '@playwright/test';
test("Handle alert", async()=>{
const browser=await chromium.launch({headless:false});
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://demoqa.com/alerts");
await page.on("dialog", async dialog=>{
const a= await dialog.message()
console.log(a);
// await page.waitForTimeout(4000);
await dialog.accept();
});
await page.locator("#alertButton").click();
});