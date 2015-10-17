var React = require('react'),
  ReactDOM = require('react-dom'),
  Geosuggest = require('react-geosuggest');

var Review = React.createClass({
  render: function() {
    return (
      <div className="panel panel-primary">
        <div className="page-header">
          <h1>{this.props.review.place.name} <small>{this.props.review.place.categories.join(', ')}</small></h1>
        </div>
        <div>By {this.props.review.by}</div>
        <div className="icon"></div>
        <div>{this.props.review.craps} craps</div>
        <div className="well">{this.props.review.text}</div>
      </div>
    )
  }
})

var Reviews = React.createClass({
  getInitialState: function() {
    return {reviews: []};
  },
  componentDidMount: function() {
    $.get('/api/reviews', function(reviews) {
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
  componentDidMount: function() {
    var el = $('.geosuggest input')
    el.addClass('form-control');
  },

  render: function() {
    var fixtures = [
      {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
      {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
      {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
    ];
 
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <Geosuggest
              placeholder="Start typing!"
              initialValue="Hamburg"
              fixtures={fixtures}
              onSuggestSelect={this.onSuggestSelect}
              location={new google.maps.LatLng(53.558572, 9.9278215)}
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
