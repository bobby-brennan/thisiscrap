var FS = require('fs');
var Express = require('express');
var App = Express();
var ReactJade = require('react-jade');

App.set('views', __dirname + '/views')
App.set('view engine', 'jade');
App.engine('jade', require('jade').__express);

App.use(require('compression')());
App.use(Express.static(__dirname + '/static'));

var recompile = function() {
  FS.readdirSync(__dirname + '/views/react').forEach(function(file) {
    var name = file.replace('.jade', '');
    var tmpl = 'var ' + name + ' = ' + ReactJade.compileFileClient(__dirname + '/views/react/' + file);
    FS.writeFileSync(__dirname + '/static/js/react/' + name + '.js', tmpl)
  })
}
recompile();
if (process.env.DEVELOPMENT) {
  App.use(function(req, res, next) {
    recompile();
    next();
  })
}

var OPTIONS = {
  basePath: '/strapping',
}
if (process.env.DEVELOPMENT) {
  OPTIONS.output = {
    styles: __dirname + '/static/css/bootstrap.css',
    settings: __dirname + '/static/css/config.json',
  }
}
App.use('/strapping', require('strapping')(OPTIONS));

FS.readdirSync(__dirname + '/routes').forEach(function(route) {
  var path = '/' + route.substring(0, route.length - 3);
  if (path === '/pages') path = '/';
  App.use(path, require('./routes/' + route));
});

App.listen(3000);
