// // jest.config.ts
import type {Config} from '@jest/types';

// // Or async function
const config: Config.InitialOptions = {
    moduleFileExtensions: ['js'],
    rootDir: '.',
    testEnvironment: 'node',
    testRegex: 'e2e.js$',
};