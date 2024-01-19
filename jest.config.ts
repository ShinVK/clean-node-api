import type { Config } from 'jest'

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir/src/**8/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  roots: [
    '<rootDir>/src'
  ],
  testEnvironment: 'jest-environment-node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
