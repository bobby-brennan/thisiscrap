var Router = module.exports = require('express').Router();

var AssetManager = require('../asset-manager.js');

Router.get('/', function(req, res) {
  res.render('home', {
    assetManager: AssetManager,
  });
})
