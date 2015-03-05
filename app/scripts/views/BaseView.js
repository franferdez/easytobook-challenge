'use strict';

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      g = require('global'),
      React = require('react');

  function BaseView() {
    this.view = React.createClass({
        render: function(){
            return(<p>BaseView instance</p>);
        }
    });
  };

  BaseView.prototype.render = function () {

    var model = {};

    $('#main-content').html('');
    
    React.render(<this.view />, $('#main-content')[0]);
  };

  return BaseView;
});