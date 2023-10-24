module.exports = {
  setupFilesAfterEnv: ['../jest.setup.js'],
  moduleDirectories: [
    'node_modules', // default
    'utils',
    __dirname, // the root directory
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|oga)$":
    "identity-obj-proxy"
  }
}