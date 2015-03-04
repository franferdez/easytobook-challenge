'use strict';

define(function(require){

  var $ = require('jquery'),
      _ = require('underscore'),
      g = require('global'),
      Backbone = require('backbone'),
      React = require('react'),
      SearchFilter = require('jsx!components/SearchFilterComponent');

    var BaseTemplateComponent =  React.createClass({

        render: function (){
          return ( 
            <section>
                <header>
                  <h1>Products</h1>
                  <SearchFilter />
                </header>
                <article>
                	{this.props.children}
                </article>
            </section>
          );
        }
      });

    return BaseTemplateComponent;
});
