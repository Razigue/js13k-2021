// @ts-check
import { test, expect } from '@playwright/test';

test('le game over est caché au démarrage', async ({ page }) => {
  await page.goto('/');
  const gameover = page.locator('.e');
  await expect(gameover).toBeHidden();
});

test('le bouton restart est caché', async ({ page }) => {
  await page.goto('/');
  const restart = page.locator('.n');
  await expect(restart).toBeHidden();
});

test('le score est caché au début du jeu', async ({ page }) => {
  await page.goto('/');
  const score = page.locator('.s');
  await expect(score).toBeHidden();
});
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
