var FS = require('fs');
var Jade = require('jade');

var AssMan = require('../asset-manager.js');

FS.writeFileSync(__dirname + '/../build/phonegap/home.html', Jade.renderFile(__dirname + '/../views/home.jade', {assetManager: AssMan}))
