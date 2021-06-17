module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/runtime/*.js'
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^~~$': '<rootDir>',
    '^@@$': '<rootDir>',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
