import {test, expect} from '@playwright/test';
test('this is my first locator practice', async({page})=>
     {
      await page.goto('https://rahulshettyacademy.com/loginpagePractise/',{waitUntil:'domcontentloaded', timeout: 60000});
      await page.waitForTimeout(5000);
      await page.locator("input[id='username']").fill("Prakash SIngh");  //username
      await page.locator("#password").fill("123456");  //password
      await page.locator("#terms").click();  //checkbox
      await page.locator("#signInBtn").click();  //sign in button
      const message = await page.locator("div[style*='block']").textContent();
      console.log(message);
      await page.waitForTimeout(10000);
      await expect(message).toBe('Incorrect username/password.');
      
     }
);

test('this is my second trim and split practice', async({page})=>
{
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/',{waitUntil:'domcontentloaded', timeout: 60000});
  const textusername = await page.locator("p[class*='text-white']").textContent();
  //const username = textusername.split("and")[0].split("is")[1].trim();
  console.log(textusername);
});