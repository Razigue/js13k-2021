// @ts-check
import { test, expect } from '@playwright/test';

test('quand la page se charge le canva est visible', async ({ page }) => {
  await page.goto('/');
  const canvas = page.locator('canvas');
  await expect(canvas).toBeVisible();
});

test('quand on clique sur le jeu les hp sont à 100', async ({ page }) => {
  await page.goto('/');
  const health = page.locator('.h').textContent();
  await page.locator('.r').click();
  await page.waitForTimeout(25000);
  expect(await health).toBe('100');
});

test('quand on lance le jeu et attend 15 seconde on meurt', async ({
  page,
}) => {
  test.setTimeout(120_000);
  await page.goto('/');
  await page.waitForSelector('canvas');
  await page.locator('.r').click();
  await page.waitForTimeout(25000);
  await expect(page.locator('.n')).toBeVisible({ timeout: 25000 });
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
