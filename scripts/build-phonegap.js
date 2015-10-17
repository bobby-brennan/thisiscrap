var FS = require('fs-extra');
var Jade = require('jade');

var AssMan = require('../asset-manager.js');

var SRC_DIR = __dirname + '/../views';
var DST_DIR = __dirname + '/../../thisiscrap-app';

FS.writeFileSync(DST_DIR + '/home.html', Jade.renderFile(SRC_DIR + '/home.jade', {assetManager: AssMan}))

FS.copySync(__dirname + '/../static/bower', DST_DIR + '/bower');
