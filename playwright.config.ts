import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  workers: 3,
  retries: 1,
  timeout: 5000,
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'npx http-server app -p 3000 --silent',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
