import { test, expect } from '@playwright/test';

test('Chats Include Profile Context', async ({ page }) => {
  await page.goto('localhost:3000/*/chat');

  const locator = await page.getByText('Chats Include Profile Context');

  expect(locator).toBeTruthy();
});

test('Context Length: extist', async ({ page }) => {
  await page.goto('localhost:3000/*/chat');

  const locator = await page.getByTestId('#lengCtx');
  
  expect(locator).toBeTruthy();
});


test('check value changes when edited', async ({ page }) => {
  await page.goto('localhost:3000/*/chat');

  // Retrieve the initial value of the context length
  const initialValue = await page.textContent('.mt-6 > .space-y-3 > label > div:nth-child(2)');

  // Retrieve the updated value of the context length
  const updatedValue = await page.textContent('.mt-6 > .space-y-3 > label > div:nth-child(2)');

  // has changed as expected
  expect(initialValue).not.toBe(updatedValue); 
});
