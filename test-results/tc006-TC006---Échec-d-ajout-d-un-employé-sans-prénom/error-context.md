# Test info

- Name: TC006 - Échec d'ajout d'un employé sans prénom
- Location: /usr/src/app/tests/tc006.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

    at /usr/src/app/tests/tc006.spec.ts:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test("TC006 - Échec d'ajout d'un employé sans prénom", async ({ page }) => {
>  4 |   await page.goto('https://opensource-demo.orangehrmlive.com/');
     |              ^ Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
   5 |   await page.getByPlaceholder('Username').fill('Admin');
   6 |   await page.getByPlaceholder('Password').fill('admin123');
   7 |   await page.getByRole('button', { name: 'Login' }).click();
   8 |
   9 |   await page.getByRole('link', { name: 'PIM' }).click();
  10 |   await page.getByRole('button', { name: 'Add' }).click();
  11 |
  12 |   // Laisser "First Name" vide volontairement
  13 |   await page.getByPlaceholder('Last Name').fill('User');
  14 |
  15 |   await page.getByRole('button', { name: 'Save' }).click();
  16 |
  17 |   // Vérification que le message "Required" est visible sous "First Name"
  18 |   await expect(
  19 |     page.locator('.oxd-input-group__message').filter({ hasText: 'Required' })
  20 |   ).toBeVisible();
  21 | });
  22 |
```