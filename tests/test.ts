import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Svelte Supertiny' })).toBeVisible();
});

test('Icons page has expected h1', async ({ page }) => {
  await page.goto('/icons');
  await expect(page.getByRole('heading', { name: 'Svelte Supertiny: Icons' })).toBeVisible();
});