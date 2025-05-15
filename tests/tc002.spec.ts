import { test, expect } from '@playwright/test';

test('TC002 - Connexion avec mot de passe incorrect', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('wrongpass');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.oxd-alert-content-text')).toBeVisible();
  await expect(page.locator('.oxd-alert-content-text')).toContainText('Invalid credentials');
});
