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
      ProductListItemComponent = require('jsx!components/ProductListItemComponent'),
      SearchFilter = require('jsx!components/SearchFilterComponent');

    var ProductsBasketView /*= function(){};
    ProductsListView.prototype = BaseView.prototype;

    ProductsListView.prototype.view*/ =  React.createClass({
        mixins: [storeMixin(store.basket)],

        getInitialState: function() {
            return { 
              productsStore: store.basket,
              //SearchFilter: ''
            };
        },

        render: function (){
          var collection = this.state.productsStore.models;
          return ( 
            <BaseTemplate>
              <ul className="products-list">
                {collection.map(function(productModel) {
                  return <ProductListItemComponent  model={productModel} />    
                })}
              </ul>
            </BaseTemplate>
          );
        }
      });

    return ProductsBasketView;
});