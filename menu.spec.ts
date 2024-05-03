import { test, expect } from '@playwright/test';

  test('start chatting is displayed', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');

    const startChattingElementExists = await page.waitForSelector('.ring-offset-background', { state: 'attached' });

    expect(startChattingElementExists).toBeTruthy();
});

test('Check if "New chat" button exists', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');
  
    const NewChatButton = await page.waitForSelector('.mr-1', { state: 'attached' });

    expect(NewChatButton).toBeTruthy();
});

test('Check if input for workspace exists', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');
  
    const inp = await page.getByPlaceholder('Search workspaces...');

    expect(inp).toBeTruthy();
});

test('Check if input for presets exists', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');
  
    const inp = await page.getByPlaceholder('Search presets...');
    expect(inp).toBeTruthy();
});

test('Check if input for promts exists', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');
  
    const inp = await page.getByPlaceholder('Search prompts...');
    expect(inp).toBeTruthy();
});

test('Check if input for models exists', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');
  
    const inp = await page.getByPlaceholder('Search models...');
    expect(inp).toBeTruthy();
});

test('Check if input for files exists', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');
  
    const inp = await page.getByPlaceholder('Search files...');
    expect(inp).toBeTruthy();
});

test('Check if input for promts on home page exist', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');
  
    const inp = await page.getByPlaceholder('Ask anything. Type &quot;@&quot; for assistants, &quot;/&quot; for prompts, &quot;#&quot; for files, and &quot;!&quot; for tools.');
    expect(inp).toBeTruthy();
});

test('Check if input for collections exist', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');
  
    const inp = await page.getByPlaceholder('Search collections...');
    expect(inp).toBeTruthy();
});

test('Check if input for assistants exist', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');
  
    const inp = await page.getByPlaceholder('Search assistants...');
    expect(inp).toBeTruthy();
});

test('Check if input for tools exist', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');
  
    const inp = await page.getByPlaceholder('Search tools...');
    expect(inp).toBeTruthy();
});

test('Check if "New Workspace" button exists', async ({ page }) => {
    await page.goto('http://localhost:3000/*/chat');
    
    const NewWorkspace = page.getByText("New Workspace");
    expect(NewWorkspace).toBeTruthy();
});
