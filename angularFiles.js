angularFiles = {
  'jstd': [
    'lib/angular/angular-scenario.js'
  ],

  'jstdExclude': [
  ]

};

if (exports) {
  exports.files = angularFiles
  exports.mergeFiles = function mergeFiles() {
      console.log('mergeFiles');
    var files = [];

    [].splice.call(arguments, 0).forEach(function(file) {
      if (file.match(/karma/)) {
        files.push(file);
      } else {
        angularFiles[file].forEach(function(f) {
          // replace @ref
          var match = f.match(/^\@(.*)/);
          if (match) {
            var deps = angularFiles[match[1]];
            files = files.concat(deps);
          } else {
            if (!/jstd|jasmine/.test(f)) { //TODO(i): remove once we don't have jstd/jasmine in repo
              files.push(f);
            }
          }
        });
      }
    });
    return files;
  }
}