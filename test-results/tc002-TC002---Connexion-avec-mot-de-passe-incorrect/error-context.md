# Test info

- Name: TC002 - Connexion avec mot de passe incorrect
- Location: /usr/src/app/tests/tc002.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

    at /usr/src/app/tests/tc002.spec.ts:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('TC002 - Connexion avec mot de passe incorrect', async ({ page }) => {
>  4 |   await page.goto('https://opensource-demo.orangehrmlive.com/');
     |              ^ Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
   5 |   await page.getByPlaceholder('Username').fill('Admin');
   6 |   await page.getByPlaceholder('Password').fill('wrongpass');
   7 |   await page.getByRole('button', { name: 'Login' }).click();
   8 |   await expect(page.locator('.oxd-alert-content-text')).toBeVisible();
   9 |   await expect(page.locator('.oxd-alert-content-text')).toContainText('Invalid credentials');
  10 | });
  11 |
```