exports.config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: [
        'test/spec.js'
    ],

    onPrepare: function() {
        browser.waitForAngularEnabled(false);
    },

    jasmineNodeOpts: {
        showColors: true
    }
}