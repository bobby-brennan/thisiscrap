var button = (function (React) {
  var fn = function(locals) {
    var tags = [];
    var locals_for_with = locals || {};
    (function(clicked) {
      tags.push(React.createElement("button", {
        onClick: clicked
      }, "Click Me!"));
    }).call(this, "clicked" in locals_for_with ? locals_for_with.clicked : typeof clicked !== "undefined" ? clicked : undefined);
    if (tags.length === 1 && !Array.isArray(tags[0])) {
      return tags.pop();
    }
    tags.unshift("div", null);
    return React.createElement.apply(React, tags);
  };
  
  fn.locals = function setLocals(locals) {
    var render = this;
    function newRender(additionalLocals) {
      var newLocals = {};
      for (var key in locals) {
        newLocals[key] = locals[key];
      }
      if (additionalLocals) {
        for (var key in additionalLocals) {
          newLocals[key] = additionalLocals[key];
        }
      }
      return render.call(this, newLocals);
    }
    newRender.locals = setLocals;
    return newRender;
  };;
  return fn;
}(typeof React !== "undefined" ? React : require(".//home/ubuntu/git/thisiscrap/node_modules/react/react.js")))