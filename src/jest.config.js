const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  collectCoverage: true,
  emitDecoratorMetadata: true,
  experimentalDecorators: true,
  transform: {
    [`(${esModules}).+\\.js$`]: 'babel-jest',
    '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js',
    // ...
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/my-app',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  })
};