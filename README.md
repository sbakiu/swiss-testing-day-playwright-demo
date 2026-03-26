# Swiss Testing Day - Playwright Demo

A simple Todo web application used to demonstrate AI-assisted test generation with Playwright and Claude Code.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running the App

Start the development server at `http://localhost:3000`:

```bash
npm run dev
```

## Running Tests

Run tests with the Playwright UI (interactive mode):

```bash
npx playwright test --ui
```

Run tests headlessly:

```bash
npx playwright test
```

> The web server is started automatically by Playwright before running tests.

## AI-Assisted Test Generation (Claude Code)

This demo showcases using Claude Code with the Playwright CLI to generate and heal tests using AI agents.

### Install the Playwright CLI

```bash
npm install -g @playwright/cli@latest
```

### Install Claude Code skills for Playwright

```bash
playwright-cli install --skills
```

This command installs Playwright skills into your project's `.claude/skills/` directory. Skills give Claude Code reference knowledge for browser automation tasks such as test generation, request mocking, tracing, video recording, and session management — enabling more accurate and context-aware assistance.

### Initialize Claude Code agents

```bash
npx playwright init-agents --loop=claude
```

This command installs the Playwright AI agents into your project's `.claude/agents/` directory. These agents extend Claude Code with specialized capabilities for browser testing:

- **Planner** — explores your web app and generates a structured test plan
- **Generator** — turns a test plan into ready-to-run Playwright test files
- **Healer** — debugs and fixes failing tests by inspecting the live app and updating locators or assertions

The `--loop=claude` flag configures the agents to run within the Claude Code agentic loop.

## Project Structure

```
app/              # Todo web application (plain HTML/JS)
tests/            # Playwright test files
specs/            # AI-generated test plans
```
