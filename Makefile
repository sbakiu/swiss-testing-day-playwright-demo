dev:
	npm run dev

init:
	npx playwright init-agents --loop=claude

test:
	npx playwright test --ui

install-cli:
	npm install -g @playwright/cli@latest

skills:
	playwright-cli install --skills