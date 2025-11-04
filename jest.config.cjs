module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.js$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'json', 'vue'],
    transformIgnorePatterns: ['/node_modules/'],
    testMatch: ['**/src/tests/**/*.spec.[jt]s'],
    transformIgnorePatterns: [
        '/node_modules/(?!vuetify)/',
    ],
    setupFilesAfterEnv: ['<rootDir>/src/tests/setup-vuetify.js'],
    moduleNameMapper: {
        '\\.(css|sass|scss|less)$': '<rootDir>/src/tests/__mocks__/styleMock.js'
    },
}