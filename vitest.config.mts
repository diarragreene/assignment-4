/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['src/**/*.{ts,tsx}'],
    globals: true,
    setupFiles: './vitest.setup.ts',
  },
})
