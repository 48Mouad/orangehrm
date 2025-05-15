# Test info

- Name: TC004 - Navigation vers le module Employés (PIM)
- Location: /usr/src/app/tests/tc004.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

    at /usr/src/app/tests/tc004.spec.ts:5:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('TC004 - Navigation vers le module Employés (PIM)', async ({ page }) => {
   4 |   // Aller à la page de connexion
>  5 |   await page.goto('https://opensource-demo.orangehrmlive.com/');
     |              ^ Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
   6 |
   7 |   // Remplir les identifiants
   8 |   await page.getByPlaceholder('Username').fill('Admin');
   9 |   await page.getByPlaceholder('Password').fill('admin123');
  10 |   await page.getByRole('button', { name: 'Login' }).click();
  11 |
  12 |   // Cliquer sur le lien "PIM"
  13 |   await page.getByRole('link', { name: 'PIM' }).click();
  14 |
  15 |   // Vérifier que l'URL est bien celle de la liste des employés
  16 |   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  17 |
  18 |   // (Optionnel) Vérifier la présence du titre "Employee Information"
  19 |   await expect(page.locator('h5')).toContainText('Employee Information');
  20 | });
  21 |
```