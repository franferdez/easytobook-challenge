'use strict';

define(function(require){

  var $ = require('jquery'),
      _ = require('underscore'),
      g = require('global'),
      Backbone = require('backbone'),
      React = require('react'),
      Input = require('reactBootstrap').Input,
      Button = require('reactBootstrap').Button;

    var SearchFilterComponent =  React.createClass({

    	getInitialState: function() {
            return { searchFilter: '' };
        },

        render: function (){
          return (
            <Input type="text" placeholder="Search..." buttonAfter={<Button>Search</Button>} />
          );
        }
      });

    return SearchFilterComponent;
});
