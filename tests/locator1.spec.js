import {test, expect} from '@playwright/test';

test('this is my first locator practice', async({page})=>
     {
      await page.goto('https://rahulshettyacademy.com/loginpagePractise/',{waitUntil:'domcontentloaded', timeout: 60000});
      await page.waitForTimeout(5000);
      await page.locator("input[id='username']").fill("Prakash SIngh");  //username
      await page.locator("#password").fill("123456");  //password
      await page.waitForTimeout(10000);
     }
);