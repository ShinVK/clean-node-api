import type { Config } from 'jest'

const config: Config = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  roots: [
    '<rootDir>/src'
  ],
  modulePathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '.*.import\\.ts$' // Expressão regular para ignorar arquivos terminados com _facilitator.ts
  ],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
