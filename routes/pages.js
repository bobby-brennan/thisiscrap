var Router = module.exports = require('express').Router();

var AssetManager = require('../asset-manager.js');

Router.get('/', function(req, res) {
  res.render('home', {
    assetManager: AssetManager,
    reviews: [],
    search_query: 'Fart buckets',
  });
})

function getSearchResultsForQuery(query) {
  // TODO(saurya): Hook up to firebase.
  return [];
}

Router.get('/search', function(req, res) {
  var reviews = getSearchResultsForQuery(req.query);
  res.render('search_results', {
    assetManager: AssetManager,
    reviews: [],
    search_query: req.query.q,
    no_reviews: reviews.length == 0,
  });
})

Router.get('/add_review', function(req, res) {
  res.render('add_review', {
    assetManager: AssetManager,
    review_location: req.query.q,
    title_placeholder: "pizza burgers",
  });
})


