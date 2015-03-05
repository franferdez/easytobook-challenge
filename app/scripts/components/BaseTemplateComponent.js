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
                <header className="header">
                  <h1><a href="#products">Products</a></h1>
                  <nav>
                    <a href="#basket" title="Products Basket">
                      <button type="button" className="btn btn-default" aria-label="Products Basket">
                        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Go to Basket
                      </button>
                    </a>
                  </nav>
                </header>
                <article>
                	{this.props.children}
                </article>
                <footer>
                    <p>Developed by Francisco Fernandez Novella</p>
                </footer>
            </section>
          );
        }
      });

    return BaseTemplateComponent;
});
