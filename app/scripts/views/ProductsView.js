'use strict';

define(function(require){

  var $ = require('jquery'),
      _ = require('underscore'),
      g = require('global'),
      Backbone = require('backbone'),
      React = require('react'),
      BaseView = require('jsx!views/BaseView'),
      store = require('stores/store'),
      storeMixin = require('helpers/storeMixin'),
      BaseTemplate = require('jsx!components/BaseTemplateComponent'),
      ProductThumbnailComponent = require('jsx!components/ProductThumbnailComponent');

    var ProductsView = function(){};
    ProductsView.prototype = BaseView.prototype;

    ProductsView.prototype.view =  React.createClass({
        mixins: [storeMixin(store.products)],

        getInitialState: function() {
            return { productsStore: store.products };
        },

        render: function (){
          var collection = this.state.productsStore.models;
          return ( 
            <BaseTemplate>
              <div className="row">
                {collection.map(function(productModel) {
                  return <ProductThumbnailComponent  model={productModel} />    
                })}
              </div>
            </BaseTemplate>
          );
        }
      });

    return ProductsView;
});
