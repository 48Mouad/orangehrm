import { test, expect } from '@playwright/test';

test("TC005 - Ajout d'un employé avec données valides", async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'PIM' }).click();
  await expect(page).toHaveURL(/\/pim\/viewEmployeeList/);

  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page).toHaveURL(/\/pim\/addEmployee/);

  await page.getByPlaceholder('First Name').fill('az');
  await page.getByPlaceholder('Last Name').fill('a');
  await page.locator('input').nth(3).fill('a0478');

  await page.getByRole('button', { name: 'Save' }).click();

  // Vérifie que la page du profil employé est bien affichée
  await expect(page).toHaveURL(/\/pim\/viewPersonalDetails\/empNumber\/\d+/);

  // 🟢 Vérification ciblée : titre principal "Personal Details"
  await expect(
    page.locator('h6.orangehrm-main-title').filter({ hasText: 'Personal Details' })
  ).toBeVisible();
  
});
