import {test, expect} from '@playwright/test';

test('this is my first locator practice', async({page})=>
     {
      await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
      await page.waitForTimeout(5000);
     }
);