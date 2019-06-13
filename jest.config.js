module.exports = {
  setupFiles: ['./jest.setup.js'],
  testRegex: '.*\\.test\\.js$',
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
