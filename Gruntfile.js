var util = require('./lib/grunt/utils.js');

module.exports = function(grunt) {
  //grunt plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadTasks('lib/grunt');

  var NG_VERSION = util.getVersion();

  //global beforeEach
  util.init();


  //config
  grunt.initConfig({
    NG_VERSION: NG_VERSION,

    connect: {
      devserver: {
        options: {
          port: 8000,
          hostname: '0.0.0.0',
          base: '.',
          keepalive: true,
          middleware: function(connect, options){
            return [
              //uncomment to enable CSP
              // util.csp(),
              util.rewrite(),
              connect.favicon('images/favicon.ico'),
              connect.static(options.base),
              connect.directory(options.base)
            ];
          }
        }
      },
      testserver: {}
    },


    test: {
      end2end: 'karma-e2e.conf.js'
    }

  });


  //alias tasks
  grunt.registerTask('test:e2e', ['connect:testserver', 'test:end2end']);
  grunt.registerTask('webserver', ['connect:devserver']);
  grunt.registerTask('default', ['test:e2e']);
};
