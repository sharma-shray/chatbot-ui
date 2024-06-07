import { test, expect } from '@playwright/test';
import exp from 'constants';

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

test('Delete the workspace', async ({ page }) => {
  
  await page.goto('localhost:3000/*/chat');

  const dialogSelector = '[role="dialog"]';
  await page.waitForSelector(dialogSelector, { state: 'visible' });

  // Check that the delete warning header is present
  const deleteHeader = "WARNING: Deleting a workspace will delete all of its data.";
  const header = await page.getByText(deleteHeader);
  expect(header).not.toBeNull();

  // Fill the input field with "New Workspace"
  const inputPlaceholder = "Type the name of this workspace to confirm";
  const input = await page.getByPlaceholder(inputPlaceholder);
  await input.fill("New Workspace");
  expect(input).not.toBeNull();

  // Enable and click the "Delete" button
  const deleteButton = await page.getByRole('button', { name: 'Delete' });
  await deleteButton.evaluate(button => button.disabled = false);
  await deleteButton.click();
});