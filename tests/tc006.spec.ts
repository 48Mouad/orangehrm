import { test, expect } from '@playwright/test';

test("TC006 - Échec d'ajout d'un employé sans prénom", async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: 'Add' }).click();

  // Laisser "First Name" vide volontairement
  await page.getByPlaceholder('Last Name').fill('User');

  await page.getByRole('button', { name: 'Save' }).click();

  // Vérification que le message "Required" est visible sous "First Name"
  await expect(
    page.locator('.oxd-input-group__message').filter({ hasText: 'Required' })
  ).toBeVisible();
});
