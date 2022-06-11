module.exports = {
  root: true,
  env: {
    browser: true,
    mocha: true
  },
  globals: {
    expect: true
  },
  plugins: [],
  extends: [
    'eslint-config-standard'
  ],
  ignorePatterns: [
    '.yarn/**',
    'dist/**',
    'vendor/**',
    'node_modules/**',
    'public/**'
  ],
  rules: {
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }]
  }
}
