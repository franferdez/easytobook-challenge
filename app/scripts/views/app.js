'use strict';

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      g = require('global'),
      React = require('react'),
      reactBackbone = require('reactBackbone'), 
      ProductListView = require('jsx!views/ProductListView');

  //import the backbone mixins
  //reactBackbone(React, Backbone, _, $);
  function App() {
  
  };

  App.prototype.render = function () {

    var model = {};
    
    React.render(<ProductListView model={model} />, $('#main-content')[0]);
  };

  return App;

});