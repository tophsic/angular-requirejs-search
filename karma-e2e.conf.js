//var angularFiles = require(__dirname + '/angularFiles.js');

files = ['test/e2e/scenarios.js'];

autoWatch = false;
singleRun = true;
logLevel = LOG_INFO;
logColors = true;
browsers = ['Chrome'];

proxies = {
};

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'E2E'
};
