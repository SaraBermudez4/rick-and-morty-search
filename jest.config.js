const nextJest = require('next/jest')
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  testTimeout: 100000,
  moduleNameMapper: {
    ...pathsToModuleNameMapper(
      compilerOptions.paths /*, { prefix: '<rootDir>/' } */
    ),
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)
