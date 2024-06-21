 
import { test, expect } from '@playwright/test';

test('Check on logo element exists', async ({ page }) => {
  await page.goto('http://localhost:3000/*/chat');

  // Check if the element exists
  const elementExists = await page.waitForSelector('.flex.cursor-pointer');

  expect(elementExists).not.toBeNull();
});


test('Check if logo element exists', async ({ page }) => {
  await page.goto('http://localhost:3000/*/chat');

  const elementExists = await page.waitForSelector('.mb-2');

  expect(elementExists).not.toBeNull();
});


test('Check if background exists', async ({ page }) => {
  await page.goto('http://localhost:3000/*/chat');

  const elementExists = await page.waitForSelector('.bg-background');

  expect(elementExists).not.toBeNull();
});

  test('check main div', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');

    // Evaluate if the div exists on the page
    const divExists = await page.evaluate(() => {
      const div = document.querySelector('.flex.size-full.flex-col.items-center.justify-center');
      return div !== null;
    });

    expect(divExists).toBe(true);
  });

  test('Check if button-arrow for side menu exists', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');

    const buttonExists = await page.waitForSelector('button.ring-offset-background');

    expect(buttonExists).not.toBeNull();
  });
