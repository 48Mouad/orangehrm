import { test, expect } from '@playwright/test';

test('TC007 - Affichage de la liste des congés via le module Leave', async ({ page }) => {
  // Connexion
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Naviguer vers Leave > Leave List
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.getByRole('link', { name: 'Leave List' }).click();

 
  await expect(
    page.locator('h5').filter({ hasText: 'Leave List' })
  ).toBeVisible();
});
