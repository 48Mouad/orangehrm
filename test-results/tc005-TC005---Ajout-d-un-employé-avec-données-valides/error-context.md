# Test info

- Name: TC005 - Ajout d'un employé avec données valides
- Location: /usr/src/app/tests/tc005.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

    at /usr/src/app/tests/tc005.spec.ts:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test("TC005 - Ajout d'un employé avec données valides", async ({ page }) => {
>  4 |   await page.goto('https://opensource-demo.orangehrmlive.com/');
     |              ^ Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
   5 |   await page.getByPlaceholder('Username').fill('Admin');
   6 |   await page.getByPlaceholder('Password').fill('admin123');
   7 |   await page.getByRole('button', { name: 'Login' }).click();
   8 |
   9 |   await page.getByRole('link', { name: 'PIM' }).click();
  10 |   await expect(page).toHaveURL(/\/pim\/viewEmployeeList/);
  11 |
  12 |   await page.getByRole('button', { name: 'Add' }).click();
  13 |   await expect(page).toHaveURL(/\/pim\/addEmployee/);
  14 |
  15 |   await page.getByPlaceholder('First Name').fill('az');
  16 |   await page.getByPlaceholder('Last Name').fill('a');
  17 |   await page.locator('input').nth(3).fill('a0478');
  18 |
  19 |   await page.getByRole('button', { name: 'Save' }).click();
  20 |
  21 |   // Vérifie que la page du profil employé est bien affichée
  22 |   await expect(page).toHaveURL(/\/pim\/viewPersonalDetails\/empNumber\/\d+/);
  23 |
  24 |   // 🟢 Vérification ciblée : titre principal "Personal Details"
  25 |   await expect(
  26 |     page.locator('h6.orangehrm-main-title').filter({ hasText: 'Personal Details' })
  27 |   ).toBeVisible();
  28 |   
  29 | });
  30 |
```