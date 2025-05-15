# Test info

- Name: TC009 - Recherche d'un employé dans la liste
- Location: /usr/src/app/tests/tc009.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

    at /usr/src/app/tests/tc009.spec.ts:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test("TC009 - Recherche d'un employé dans la liste", async ({ page }) => {
>  4 |   await page.goto('https://opensource-demo.orangehrmlive.com/');
     |              ^ Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
   5 |   await page.getByPlaceholder('Username').fill('Admin');
   6 |   await page.getByPlaceholder('Password').fill('admin123');
   7 |   await page.getByRole('button', { name: 'Login' }).click();
   8 |
   9 |   await page.getByRole('link', { name: 'PIM' }).click();
  10 |
  11 |   // Remplir "Employee Name"
  12 |   await page.getByPlaceholder('Type for hints...').first().fill('A8DCo');
  13 |   await page.getByRole('button', { name: 'Search' }).click();
  14 |
  15 |   // ✅ Filtrer la ligne contenant "A8DCo"
  16 |   const targetRow = page.locator('div.oxd-table-card').filter({ hasText: 'A8DCo' });
  17 |
  18 |   // ✅ Vérifie que la ligne est bien visible
  19 |   await expect(targetRow).toBeVisible();
  20 |
  21 |   // (facultatif) Vérifie aussi un contenu spécifique dans cette ligne
  22 |   await expect(targetRow).toContainText('010Z');
  23 | });
  24 |
```