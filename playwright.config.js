import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    trace: 'on-first-retry',
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport: null,
        deviceScaleFactor: undefined, // remove conflicting property
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
  ],
});