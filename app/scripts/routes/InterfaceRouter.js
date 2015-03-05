'use strict';

define(function(require){

  var $ = require('jquery'),
      _ = require('underscore'),
      g = require('global'),
      Backbone = require('backbone'),
      React = require('react'),
      ProductsView = require('jsx!views/ProductsView'),
      ProductsListView = require('jsx!views/ProductsListView'),
      ProductDetailView = require('jsx!views/ProductDetailView'),
      ProductsBasketView = require('jsx!views/ProductsBasketView');

   var InterfaceRouter = React.createClass({
      componentWillMount : function() {
        this.callback = (function() {
          this.forceUpdate();
        }).bind(this);
      
        this.props.router.on("route", this.callback);
      },
      componentWillUnmount : function() {
        this.props.router.off("route", this.callback);
      },
      render : function() {
        switch(this.props.router.current  ) {
          case 'products':
            return <ProductsView />;
            break;

          case 'list':
            return <ProductsListView />;
            break;

          case 'basket':
            return <ProductsBasketView />;
            break;

          case 'detail':
            return <ProductDetailView model={this.props.router.model} />;
            break;

          default:
            return <div />;
            break;
        }
      }
    });

    return InterfaceRouter;
});