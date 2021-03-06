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

    var ProductsListView /*= function(){};
    ProductsListView.prototype = BaseView.prototype;

    ProductsListView.prototype.view*/ =  React.createClass({
        mixins: [storeMixin(store.products)],

        getInitialState: function() {
            return { 
              productsStore: store.products,
              SearchFilter: ''
            };
        },

        handleUserInput: function(filterText) {
            this.setState({
                productsStore: store.products.filterCollection(function(model){
                  return model.get('name').toLowerCase().indexOf(filterText) >= 0;
                }),
                searchFilter: filterText
            });
        },

        render: function (){
          var collection = this.state.productsStore.models;
          return ( 
            <BaseTemplate>
              <div className="change-view">
                <SearchFilter searchFilter={this.state.searchFilter} onUserInput={this.handleUserInput} />
                <a href="#products" title="Products List">
                  <button type="button" className="btn btn-default" aria-label="Products List">
                    <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                  </button>
                </a>
              </div>
              
              <ul className="products-list">
                {collection.map(function(productModel) {
                  return <ProductListItemComponent  model={productModel} />    
                })}
              </ul>
            </BaseTemplate>
          );
        }
      });

    return ProductsListView;
});
