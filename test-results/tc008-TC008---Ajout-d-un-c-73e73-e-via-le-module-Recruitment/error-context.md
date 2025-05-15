# Test info

- Name: TC008 - Ajout d'un candidat valide via le module Recruitment
- Location: /usr/src/app/tests/tc008.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

    at /usr/src/app/tests/tc008.spec.ts:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test("TC008 - Ajout d'un candidat valide via le module Recruitment", async ({ page }) => {
>  4 |   await page.goto('https://opensource-demo.orangehrmlive.com/');
     |              ^ Error: page.goto: net::ERR_TIMED_OUT at https://opensource-demo.orangehrmlive.com/
   5 |   await page.getByPlaceholder('Username').fill('Admin');
   6 |   await page.getByPlaceholder('Password').fill('admin123');
   7 |   await page.getByRole('button', { name: 'Login' }).click();
   8 |
   9 |   await page.getByRole('link', { name: 'Recruitment' }).click();
  10 |   await page.getByRole('button', { name: 'Add' }).click();
  11 |
  12 |   // Champs valides
  13 |   await page.getByPlaceholder('First Name').fill('Azeddine');
  14 |   await page.getByPlaceholder('Last Name').fill('Elhadi');
  15 |   await page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > input').fill('azeddine.elhadi@example.com');
  16 |
  17 |   // Sauvegarder
  18 |   await page.getByRole('button', { name: 'Save' }).click();
  19 |
  20 |   // ✅ Vérifie qu’on est bien redirigé vers la fiche du candidat
  21 |   await expect(page).toHaveURL(/\/recruitment\/addCandidate\/\d+$/);
  22 |
  23 |   // ✅ Vérifie que le texte "Candidate Profile" est visible
  24 |   await expect(page.getByText('Candidate Profile')).toBeVisible();
  25 | });
  26 |
```