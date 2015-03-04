'use strict';

define(function(require){

  var $ = require('jquery'),
      _ = require('underscore'),
      g = require('global'),
      Backbone = require('backbone'),
      React = require('react'),
      ProductsAction = require('actions/ProductsAction');

    var SearchFilterComponent =  React.createClass({

    	handleInputChange: function() {
            var searchValue = this.refs.filterInputText.getDOMNode().value.toLowerCase();
            this.props.onUserInput(searchValue);
        },

        render: function (){
          return (
          	<input type="text" className="form-control" value={this.props.searchFilter} placeholder="Search..." aria-describedby="Search"  ref="filterInputText" onChange={this.handleInputChange} />
          );
        }
      });

    return SearchFilterComponent;
});
