exports.config = {
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    // services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: [
        // 'dot',
        ['junit', {outputDir: 'allure-results'}]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
