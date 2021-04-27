module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['node_modules/?!react-native'],
  coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
  testEnvironment: 'jsdom',
};
