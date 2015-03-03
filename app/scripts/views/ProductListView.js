'use strict';

define(function(require){

  var $ = require('jquery'),
      _ = require('underscore'),
      g = require('global'),
      Backbone = require('backbone'),
      React = require('react'),
      GridComponent = require('jsx!components/GridComponent');

    var ProductListView = React.createClass({
      render: function (){
        var model = this.props.model;
        return ( 
          <section>
              <header>
                <h1>Products</h1>
              </header>
              <article>
                  <GridComponent />
              </article>
          </section>
        );
      }
    });

    return ProductListView;
});