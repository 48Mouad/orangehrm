# Test info

- Name: TC010 - Déconnexion de l'utilisateur
- Location: /usr/src/app/tests/tc010.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

    at /usr/src/app/tests/tc010.spec.ts:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test("TC010 - Déconnexion de l'utilisateur", async ({ page }) => {
>  4 |   await page.goto('https://opensource-demo.orangehrmlive.com/');
     |              ^ Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
   5 |   await page.getByPlaceholder('Username').fill('Admin');
   6 |   await page.getByPlaceholder('Password').fill('admin123');
   7 |   await page.getByRole('button', { name: 'Login' }).click();
   8 |
   9 |   // ✅ Ouvre le menu utilisateur par nom affiché
  10 |   await page.locator('.oxd-userdropdown-name').click();
  11 |
  12 |   // ✅ Clique sur "Logout"
  13 |   await page.getByRole('menuitem', { name: 'Logout' }).click();
  14 |
  15 |   // ✅ Vérifie le retour à la page de connexion
  16 |   await expect(page).toHaveURL(/auth\/login/);
  17 | });
  18 |
```