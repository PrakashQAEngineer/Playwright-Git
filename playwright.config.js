import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    browserName: 'chromium',
    trace: 'on-first-retry',
     viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    }
  },

  projects: [
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'] },
      viewport: null,
    },
  ],
});