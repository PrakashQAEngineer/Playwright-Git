import {test, expect} from '@playwright/test';

test('First Playwright test with browser and page context',async ({browser})=>
  {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    await page.close();
  await context.close();
  }
);

test('second playwright test without browser and page context',async ({page})=> 
{
    await page.goto('https://sparshyog.com/');
    await page.title().then((title) => {    
      console.log(title); // getting the title of the page and printing it in the console
    });

    expect(await page.title()).toBe('Yoga & Meditation Classes in Delhi NCR | Sparsh Yog');      
    await page.waitForTimeout(10000); // to make the browser wait for 5 seconds before closing the page
}
);