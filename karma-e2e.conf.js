//var angularFiles = require(__dirname + '/angularFiles.js');

files = ['test/e2e/scenario.js'];

autoWatch = false;
singleRun = true;
logLevel = LOG_DEBUG;
logColors = true;
browsers = ['Chrome'];

proxies = {
};

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'E2E'
};
