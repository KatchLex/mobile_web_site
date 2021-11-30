exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['spec.js'],
    onPrepare: function() {
        browser.manage().window().maximize();
    },
    jasmineNodeOpts: {showColors: true}
}