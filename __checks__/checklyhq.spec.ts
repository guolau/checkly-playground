import { test, expect } from '@playwright/test';

test('navigate to docs and search for traces', async ({ page }) => {
  await page.goto('https://www.checklyhq.com/');
  await page.getByRole('button', { name: 'Developers' }).first().click();
  await page.getByRole('link', { name: 'Documentation Technical docs' }).click();
  await expect(page.getByRole('heading', { name: 'Getting started with Checkly' })).toBeVisible();
  await page.locator('button.DocSearch').click();
  await expect(page.getByPlaceholder('Search docs')).toBeEmpty();
  await page.getByPlaceholder('Search docs').click();
  await page.getByPlaceholder('Search docs').fill('traces');
  await page.getByRole('link', { name: 'Importing your traces to' }).click();
  await expect(page.getByRole('heading', { name: 'Importing your traces to' })).toBeVisible();
});

test('navigate to main blog and it loads correctly', async ({ page }) => {
  await page.goto('https://www.checklyhq.com');
  await page.getByRole('link', { name: 'Blog' }).first().click();
  await expect(page.getByRole('heading', { name: 'The Checkly Blog' })).toBeVisible();

  const post = page.locator('.section-blog').first();
  const postName = await post.locator('h2').textContent();
  await post.click();
  
  if(postName) {
    await expect(page.locator('h1')).toContainText(postName);
  } else {
    test.fail();
  }
});