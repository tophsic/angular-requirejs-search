var angularFiles = require(__dirname + '/angularFiles.js');

files = [ANGULAR_SCENARIO, ANGULAR_SCENARIO_ADAPTER, 'test/e2e/scenarios.js'];

autoWatch = false;
singleRun = true;
logLevel = LOG_INFO;
logColors = true;
browsers = ['Chrome'];

proxies = {
  '/angular': 'http://localhost:8000/build/angular',
  '/': 'http://localhost:8000/app/'
};

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'E2E'
};
