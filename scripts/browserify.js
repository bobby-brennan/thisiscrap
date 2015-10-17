var Exec = require('child_process').execSync;
var FS = require('fs');

var REACT_DIR = __dirname + '/../static/js/react';
FS.readdirSync(REACT_DIR).forEach(function(file) {
  Exec('browserify -t reactify ' + REACT_DIR + '/' + file + ' > ' + REACT_DIR + '_build/' + file);
})
