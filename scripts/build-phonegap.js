var FS = require('fs-extra');
var Jade = require('jade');

var AssMan = require('../asset-manager.js');

var SRC_DIR = __dirname + '/../views';
var DST_DIR = __dirname + '/../../thisiscrap-app';

FS.writeFileSync(DST_DIR + '/index.html', Jade.renderFile(SRC_DIR + '/home.jade', {assetManager: AssMan, host: 'http://52.26.170.187:3000'}))

FS.copySync(__dirname + '/../static', DST_DIR + '/');
