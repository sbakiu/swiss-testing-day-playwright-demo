# Todo App - Add Item Test Plan

## Application Overview

A simple Todo web application running at http://localhost:3000. It presents a heading "Todo App", a text input with placeholder "What needs to be done?", and an "Add An Item" button. When no todos exist, a "No todos yet. Add one above!" message is displayed. After adding an item, it appears in a list with a toggle checkbox and a delete button. The input field is cleared automatically after a successful addition.

## Test Scenarios

### 1. Add Todo Item

**Seed:** `specs/add-todo-item.plan.md`

#### 1.1. Add a todo item by clicking the Add An Item button

**File:** `specs/add-todo-item.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
    - expect: The page title is 'Todo App'
    - expect: A heading 'Todo App' is visible
    - expect: A text input with placeholder 'What needs to be done?' is visible and empty
    - expect: An 'Add An Item' button is visible
    - expect: The paragraph 'No todos yet. Add one above!' is displayed
  2. Click the text input labelled 'What needs to be done?' and type 'Buy groceries'
    - expect: The text input contains the value 'Buy groceries'
  3. Click the 'Add An Item' button
    - expect: The todo item 'Buy groceries' appears in the list
    - expect: The list item contains a toggle checkbox labelled 'Toggle: Buy groceries'
    - expect: The list item contains a delete button labelled 'Delete: Buy groceries'
    - expect: The text input is cleared and is now empty
    - expect: The 'No todos yet. Add one above!' paragraph is no longer visible
