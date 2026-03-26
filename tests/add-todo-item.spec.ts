// spec: specs/add-todo-item.plan.md

import { test, expect } from '@playwright/test';

test.describe('Add Todo Item', () => {
  test('Add a todo item by clicking the Add An Item button', async ({ page }) => {
    // 1. Navigate to http://localhost:3000
    await page.goto('http://localhost:3000');

    // expect: The page title is 'Todo App'
    await expect(page).toHaveTitle('Todo App');

    // expect: A heading 'Todo App' is visible
    await expect(page.getByRole('heading', { name: 'Todo App' })).toBeVisible();

    // expect: A text input with placeholder 'What needs to be done?' is visible and empty
    const todoInput = page.getByRole('textbox', { name: 'What needs to be done?' });
    await expect(todoInput).toBeVisible();
    await expect(todoInput).toHaveValue('');

    // expect: An 'Add An Item' button is visible
    await expect(page.getByRole('button', { name: 'Add An Item' })).toBeVisible();

    // expect: The paragraph 'No todos yet. Add one above!' is displayed
    await expect(page.getByText('No todos yet. Add one above!')).toBeVisible();

    // 2. Click the text input labelled 'What needs to be done?' and type 'Buy groceries'
    await todoInput.click();
    await todoInput.fill('Buy groceries');

    // expect: The text input contains the value 'Buy groceries'
    await expect(todoInput).toHaveValue('Buy groceries');

    // 3. Click the 'Add An Item' button
    await page.getByRole('button', { name: 'Add An Item' }).click();

    // expect: The todo item 'Buy groceries' appears in the list
    await expect(page.getByText('Buy groceries')).toBeVisible();

    // expect: The list item contains a toggle checkbox labelled 'Toggle: Buy groceries'
    await expect(page.getByRole('checkbox', { name: 'Toggle: Buy groceries' })).toBeVisible();

    // expect: The list item contains a delete button labelled 'Delete: Buy groceries'
    await expect(page.getByRole('button', { name: 'Delete: Buy groceries' })).toBeVisible();

    // expect: The text input is cleared and is now empty
    await expect(todoInput).toHaveValue('');

    // expect: The 'No todos yet. Add one above!' paragraph is no longer visible
    await page.getByText('No todos yet. Add one above!').first().waitFor({ state: 'hidden' });
  });
});
