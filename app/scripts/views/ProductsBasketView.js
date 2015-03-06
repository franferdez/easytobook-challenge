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
      BasketAction = require('actions/BasketAction'),
      BaseTemplate = require('jsx!components/BaseTemplateComponent'),
      ProductListItemComponent = require('jsx!components/ProductListItemComponent'),
      SearchFilter = require('jsx!components/SearchFilterComponent'),
      BasketTableRowComponent = require('jsx!components/BasketTableRowComponent');

    var ProductsBasketView /*= function(){};
    ProductsListView.prototype = BaseView.prototype;

    ProductsListView.prototype.view*/ =  React.createClass({
        mixins: [storeMixin(store.basket)],

        getInitialState: function() {
            return { 
              productsStore: store.basket,
            };
        },

        setBuyQty: function(qty){
            console.log(this.state.productsStore);
            this.setState({
                productsStore: this.state.productsStore
            });
        },

        render: function (){
          var collection = this.state.productsStore.models,
              subtotal = 0;

          if(collection.length>0){
            return ( 
              <BaseTemplate>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collection.map(function(model) {
                      subtotal = subtotal + parseFloat(model.get('price'));
                      return (<BasketTableRowComponent model={model}/>);
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2">SubTotal</td>
                      <td>{subtotal  + ' EUR'}</td>
                    </tr>
                  </tfoot>
                </table>
                <button type="button" className="btn btn-danger">Reset</button>
                <button type="button" className="btn btn-success">Accept Buy</button>
              </BaseTemplate>
            );
          }else{
            return(
              <BaseTemplate>
                <p>No products in the basket</p>
              </BaseTemplate>
            );
          }
          
        }
      });

    return ProductsBasketView;
});