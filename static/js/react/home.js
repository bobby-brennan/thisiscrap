$(document).ready(function() {
  var container = document.querySelector('#ReactContainer');
  React.render(button({
    clicked: function () {
      alert('clicked');
    }
  }), container);
});
