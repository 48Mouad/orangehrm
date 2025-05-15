# Test info

- Name: TC001 - Connexion avec identifiants valides
- Location: /usr/src/app/tests/tc001.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

    at /usr/src/app/tests/tc001.spec.ts:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('TC001 - Connexion avec identifiants valides', async ({ page }) => {
>  4 |   await page.goto('https://opensource-demo.orangehrmlive.com/');
     |              ^ Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
   5 |   await page.getByPlaceholder('Username').fill('Admin');
   6 |   await page.getByPlaceholder('Password').fill('admin123');
   7 |   await page.getByRole('button', { name: 'Login' }).click();
   8 |   await expect(page).toHaveURL(/dashboard/);
   9 | });
  10 |
```