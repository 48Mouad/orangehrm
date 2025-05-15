import { test, expect } from '@playwright/test';

test("TC008 - Ajout d'un candidat valide via le module Recruitment", async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('button', { name: 'Add' }).click();

  // Champs valides
  await page.getByPlaceholder('First Name').fill('Azeddine');
  await page.getByPlaceholder('Last Name').fill('Elhadi');
  await page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > input').fill('azeddine.elhadi@example.com');

  // Sauvegarder
  await page.getByRole('button', { name: 'Save' }).click();

  // ✅ Vérifie qu’on est bien redirigé vers la fiche du candidat
  await expect(page).toHaveURL(/\/recruitment\/addCandidate\/\d+$/);

  // ✅ Vérifie que le texte "Candidate Profile" est visible
  await expect(page.getByText('Candidate Profile')).toBeVisible();
});
