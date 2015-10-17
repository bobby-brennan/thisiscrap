var AssetMan = require('bb-asset-manager');

var CORE_JS = [
  "bower/jquery/dist/jquery.min.js",
  "bower/bootstrap/dist/js/bootstrap.min.js",
  "bower/react/react-with-addons.min.js",
  "bower/react/react-dom.min.js",
]
var CORE_CSS = [
  "css/bootstrap.css",
  "bower/font-awesome/css/font-awesome.min.css",
]

var assetManager = module.exports = new AssetMan({
  useOriginalAssets: process.env.DEVELOPMENT,
  staticDirectory: __dirname + '/static',
  basePath: '.',
  js: {
    outputDirectory: 'minified/js',
  },
  css: {
    outputDirectory: 'minified/css',
  }
});

assetManager.addCSS('add_review', {files: CORE_CSS.concat(['css/add_review.css'])});
assetManager.addCSS('home', {files: CORE_CSS.concat(['css/home.css'])});
assetManager.addJS('home', {files: CORE_JS.concat([
  'js/react_build/app.js',
])})

assetManager.compile();
