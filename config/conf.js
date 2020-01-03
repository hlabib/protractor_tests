// An example configuration file.


exports.config = {
  directConnect: true,
      onPrepare: function () {
          browser.driver.manage().window().maximize();
      },

    allScriptsTimeout: 11000,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',


  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/calculator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
            showColors: true, // Use colors in the command line report.
            isVerbose: true, //display spec names as they are being executed
            includeStackTrace: true, //print stack trace when things go wrong
  },
  onPrepare: function() {
    var AllureReporter = require('C:/Windows/System32/node_modules/jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  }

};
