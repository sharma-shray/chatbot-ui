import { test, expect } from '@playwright/test';

//   test('check button new-workspace-button exists', async ({ page }) => {
//     await page.goto('localhost:3000/*/chat');

//     // Wait for the network to be idle
//     await page.waitForLoadState('networkidle');

//     const button = page.locator('#new-workspace-button');
//     expect(button).toBeTruthy();
//   });


//   test('Profile button exist', async ({ page }) => {
//     await page.goto('localhost:3000/*/chat"', { waitUntil: 'networkidle' }); // replace with your actual URL
  
//     const locator = await page.getByTestId('#userButtonOpenMenu');
  
//     expect(locator).toBeTruthy();
// });


// test('Cancel and save buttons exist', async ({ page }) => {
//   await page.goto('localhost:3000/*/chat"', { waitUntil: 'networkidle' }); 

//   const CancelButtons = await page.getByText('Cancel');
//   const SaveButtons = await page.getByText('Save');

//   expect(CancelButtons).toBeTruthy();
//   expect(SaveButtons).toBeTruthy();
// });



//   test('profile button open side panel', async ({ page }) => {
//     await page.goto("localhost:3000/*/chat");
//     await page.waitForLoadState('networkidle');
  
//   const button = await page.getByTestId('#userButtonOpenMenu');

//   let State = await expect(button).toHaveAttribute('aria-expanded', "")
//   console.log('Initial aria-expanded:', State);

//   await expect(button).toHaveAttribute('aria-expanded', 'false', { timeout: 10000 });


//   await button.click();

//   const finalAriaExpanded = await button.getAttribute('aria-expanded');
//   console.log('Final aria-expanded:', finalAriaExpanded);

//   await expect(button).toHaveAttribute('aria-expanded', 'true', { timeout: 10000 });
// });



// test('get and output aria-expanded value', async ({ page }) => {
//   // Navigate to the page containing the button
//   await page.goto("localhost:3000/*/chat");

//   const outerButton = await page.$('div.absolute.right-2.top-2 > button[type="button"][aria-haspopup="dialog"]');

//   if (outerButton) {
//       // Get the value of the aria-expanded attribute
//       const ariaExpandedValue = await outerButton.getAttribute('aria-expanded');

//       // Output the value
//       console.log(`The value of aria-expanded is: ${ariaExpandedValue}`);

//       // Assert that the value is as expected (for example, 'true')
//       expect(ariaExpandedValue).toBe('true');
//   } else {
//       console.error('Button element not found');
//   }
// });

// test('should update workspace name and reflect the change', async ({ page }) => {
//     await page.goto("localhost:3000/*/chat");
  
//     // Ensure the "Main" tab is active and visible
//   //  await page.click('button:has-text("Main")');
  
//     // Define the selectors
//     const workspaceNameInputSelector = 'input[placeholder="Name..."]';
//     const workspaceDisplaySelector = 'div.flex.items-center.truncate > div.flex.items-center + div';
  
//     // Wait for the workspace name input to be visible
//     // await page.getByText(workspaceNameInputSelector, { state: 'visible' });
  
//     // Change the workspace name
//     const newWorkspaceName = 'Updated Workspace Name';
//     await page.fill(workspaceNameInputSelector, newWorkspaceName);
  
//     // Press Enter to confirm the change (if required, depending on your application behavior)
//     // await page.press(workspaceNameInputSelector, 'Enter');
  
//     // Wait for the display to update
//     await page.waitForTimeout(1000); 
  
//     // Verify that the updated name is reflected in the display
//     const displayedWorkspaceName = await page.textContent(workspaceDisplaySelector);
//     expect(displayedWorkspaceName).toBe(newWorkspaceName);
//   });

  test('Check help information exist', async ({ page }) => {
    await page.goto("localhost:3000/*/chat");
  
    const TextShowHelp = "Show Help";
    const TextShowWorkspace = "Show Workspaces";

    const svgElement = await page.$('#icon-question-mark');
    
    if (svgElement) {
      console.log('SVG element found');
      // You can perform further actions on the svgElement if needed
    } else {
      console.log('SVG element not found');
    }


    const TargetShowHelp = await page.getByText(TextShowHelp);
    const TargetWorkspace = await page.getByText(TextShowWorkspace);

    expect(TargetShowHelp).toBeVisible();
    expect(TargetWorkspace).toBeVisible(); 
  });