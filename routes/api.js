var Router = module.exports = require('express').Router();

var DATA = {
  reviews: [
    {id: 1, by: 'saurya', place: 123, craps: 2, text: 'This place sucks'},
    {id: 2, by: 'bobby', place: 456, craps: 3, text: 'The worst'},
  ],
  places: [
    {id: 123, name: 'Mary Chung\'s', categories: ['Chinese']},
    {id: 456, name: 'The Last Drop', categories: ['Bar']},
  ],
  users: [
    {id: 'bobby', name: 'Bobby Brennan'},
    {id: 'saurya', name: 'Saurya Velagapudi'},
  ]
}

DATA.reviews.forEach(function(review) {
  review.place = DATA.places.filter(function(p) {return p.id === review.place})[0];
})

Object.keys(DATA).forEach(function(thing) {
  Router.get('/' + thing, function(req, res) {
    res.json(DATA[thing]);
  })

  Router.get('/' + thing + '/:id', function(req, res) {
    res.json(DATA[thing].filter(function(t) {return t.id === req.params.id})[0])
  })
})

