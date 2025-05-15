import { test, expect } from '@playwright/test';

test('TC003 - Accès au tableau de bord après login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h6')).toContainText('Dashboard');
});
