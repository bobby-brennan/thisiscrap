var FS = require('fs');
var Jade = require('jade');

var AssMan = require('../asset-manager.js');

var SRC_DIR = __dirname + '/../views';
var DST_DIR = __dirname + '/../../thisiscrap-app';

FS.writeFileSync(DST_DIR + '/home.html', Jade.renderFile(SRC_DIR + '/home.jade', {assetManager: AssMan}))
