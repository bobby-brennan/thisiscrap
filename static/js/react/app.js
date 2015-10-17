var React = require('react'),
  ReactDOM = require('react-dom'),
  Geosuggest = require('react-geosuggest');
 
var App = React.createClass({
  /**
   * Render the example app
   */

  componentDidMount: function() {
    var el = $(this.getDOMNode());
    el.find('input').addClass('form-control');
    console.log('added!')
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
