import { test, expect } from '@playwright/test';

test("TC010 - Déconnexion de l'utilisateur", async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ Ouvre le menu utilisateur par nom affiché
  await page.locator('.oxd-userdropdown-name').click();

  // ✅ Clique sur "Logout"
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  // ✅ Vérifie le retour à la page de connexion
  await expect(page).toHaveURL(/auth\/login/);
});
