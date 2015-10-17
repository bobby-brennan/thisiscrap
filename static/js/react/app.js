var React = require('react'),
  ReactDOM = require('react-dom'),
  Geosuggest = require('react-geosuggest');

var Review = React.createClass({
  render: function() {
    var craps = [];
    for (i = 0; i < this.props.review.craps; ++i) {
      craps.push(i)
    }
    return (
      <div>
        <h3>{this.props.review.place.name} <small>{this.props.review.place.categories.join(', ')}</small></h3>
        <div>By {this.props.review.by}</div>
        <div className="icon"></div>
        <div>{craps.map(function(idx) {
          return <img className="crap-image" src='images/brand.png' key={idx}></img>
        })}</div>
        <p>{this.props.review.text}</p>
      </div>
    )
  }
})

var Reviews = React.createClass({
  getInitialState: function() {
    return {reviews: []};
  },
  componentDidMount: function() {
    $.get(HOST + '/api/reviews', function(reviews) {
      this.setState({
        reviews: reviews,
      })
    }.bind(this))
  },
  render: function() {
    return (
      <div>
        {this.state.reviews.map(function(review) {
           console.log('render rev', review);
           return (<Review review={review} key={review.id} />)
        })}
      </div>
    )
  },
})
 
var App = React.createClass({
  getInitialState: function() {
    return {
      location: new google.maps.LatLng(53.558572, 9.9278215),
    }
  },

  componentDidMount: function() {
    var input = $('.geosuggest input')
    input.addClass('form-control');
    
    var results = $('.geosuggest ul');
    results.addClass('nav nav-pills')

    var self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        self.setState({
          location: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        });
        console.log('state', self.state);
      })
    }
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Geosuggest
              placeholder="Search for places to crap on..."
              onSuggestSelect={this.onSuggestSelect}
              location={this.state.location}
              radius="20" />
            <Reviews />
          </div>
        </div>
      </div>
    )
  },
 
  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */
  onSuggestSelect: function(suggest) {
    console.log(suggest);
  }
});

$(document).ready(function() {
  ReactDOM.render(<App />, document.getElementById('App'));
});
