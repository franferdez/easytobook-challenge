'use strict';

define(function(require){

  var $ = require('jquery'),
      _ = require('underscore'),
      g = require('global'),
      Backbone = require('backbone'),
      React = require('react');

    var BaseTemplateComponent =  React.createClass({

        render: function (){
          return ( 
            <section>
                <header>
                  <h1>Products</h1>
                  <ul className="nav nav-tabs">
                    <li role="presentation"><a href="#products">Products</a></li>
                    <li role="presentation"><a href="#list">List</a></li>
                    <li role="presentation"><a href="#basket">Basket</a></li>
                  </ul>
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
