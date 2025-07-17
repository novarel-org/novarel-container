import type { Config } from 'jest';

const config: Config = {
    transform: {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
    testMatch: [
        '<rootDir>/tests/**/*.test.ts',
        '<rootDir>/src/**/*.spec.ts',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^~/(.*)$': '<rootDir>/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/dist/**',
        '!**/__tests__/**',
    ],
    extensionsToTreatAsEsm: ['.ts'],
    globals: {},
};

export default config;
