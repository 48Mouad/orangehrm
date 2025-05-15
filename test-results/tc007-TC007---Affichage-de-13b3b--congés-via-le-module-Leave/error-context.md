# Test info

- Name: TC007 - Affichage de la liste des congés via le module Leave
- Location: /usr/src/app/tests/tc007.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

    at /usr/src/app/tests/tc007.spec.ts:5:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('TC007 - Affichage de la liste des congés via le module Leave', async ({ page }) => {
   4 |   // Connexion
>  5 |   await page.goto('https://opensource-demo.orangehrmlive.com/');
     |              ^ Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
   6 |   await page.getByPlaceholder('Username').fill('Admin');
   7 |   await page.getByPlaceholder('Password').fill('admin123');
   8 |   await page.getByRole('button', { name: 'Login' }).click();
   9 |
  10 |   // Naviguer vers Leave > Leave List
  11 |   await page.getByRole('link', { name: 'Leave' }).click();
  12 |   await page.getByRole('link', { name: 'Leave List' }).click();
  13 |
  14 |  
  15 |   await expect(
  16 |     page.locator('h5').filter({ hasText: 'Leave List' })
  17 |   ).toBeVisible();
  18 | });
  19 |
```