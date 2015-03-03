'use strict';

define(function(require){

  var $ = require('jquery'),
      _ = require('underscore'),
      g = require('global'),
      Backbone = require('backbone'),
      React = require('react'),
      BaseView = require('jsx!views/BaseView'),
      storeMixin = require('helpers/storeMixin'),
      ProductThumbnailComponent = require('jsx!components/ProductThumbnailComponent');

    var ProductsView = function(){};

    ProductsView.prototype = BaseView.prototype;

    ProductsView.prototype.view =  React.createClass({
        mixins: [storeMixin(g.getStore('products'))],

        getInitialState: function() {
            return { productsStore: g.getStore('products') };
        },

        render: function (){
          var collection = this.state.productsStore.models;
          return ( 
            <section>
                <header>
                  <h1>Products</h1>
                </header>
                <article>
                  <div className="row">
                  {collection.map(function(productModel) {
                    return <ProductThumbnailComponent  model={productModel} />    
                  })}
                  </div>
                </article>
            </section>
          );
        }
      });

    return ProductsView;
});
