import { test, expect } from '@playwright/test';

test("TC009 - Recherche d'un employé dans la liste", async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'PIM' }).click();

  // Remplir "Employee Name"
  await page.getByPlaceholder('Type for hints...').first().fill('A8DCo');
  await page.getByRole('button', { name: 'Search' }).click();

  // ✅ Filtrer la ligne contenant "A8DCo"
  const targetRow = page.locator('div.oxd-table-card').filter({ hasText: 'A8DCo' });

  // ✅ Vérifie que la ligne est bien visible
  await expect(targetRow).toBeVisible();

  // (facultatif) Vérifie aussi un contenu spécifique dans cette ligne
  await expect(targetRow).toContainText('010Z');
});
