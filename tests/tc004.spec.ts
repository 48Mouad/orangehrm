import { test, expect } from '@playwright/test';

test('TC004 - Navigation vers le module Employés (PIM)', async ({ page }) => {
  // Aller à la page de connexion
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Remplir les identifiants
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Cliquer sur le lien "PIM"
  await page.getByRole('link', { name: 'PIM' }).click();

  // Vérifier que l'URL est bien celle de la liste des employés
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

  // (Optionnel) Vérifier la présence du titre "Employee Information"
  await expect(page.locator('h5')).toContainText('Employee Information');
});
