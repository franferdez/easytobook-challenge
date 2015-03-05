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
                  <h1>Products</h1>
                  <nav>
                    <a href="#products" title="Products List">
                      <button type="button" className="btn btn-default" aria-label="Products List">
                        <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                      </button>
                    </a>
                    <a href="#list" title="Products Thumbnails">
                      <button type="button" className="btn btn-default" aria-label="Products Thumbnails">
                        <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
                      </button>
                    </a>
                    <a href="#basket" title="Products Basket">
                      <button type="button" className="btn btn-default" aria-label="Products Basket">
                        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                      </button>
                    </a>
                  </nav>
                </header>
                <article>
                	{this.props.children}
                </article>
                <footer>
                    <p>Developed by Francisco</p>
                </footer>
            </section>
          );
        }
      });

    return BaseTemplateComponent;
});
