'use strict';

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      React = require('react');


  var GridComponent =  React.createClass({
    render: function(){
          return(
            <ul>
                <li>
                  <img src="" alt="" />
                  <h2>product 1</h2>
                  <p>this would be a great product some day</p>
                </li>
            </ul>
          );
    }
  });
  
  return GridComponent;
});