'use strict';

define(function (require) {
    var $ = require('jquery'),
     	_ = require('underscore'),
     	React = require('react'),
     	g = require('global'),
     	Utils = require('helpers/Utils'),
        InterfaceRouter = require('jsx!routes/InterfaceRouter');

    var Router = Backbone.Router.extend({
        routes: {
        	'products': 'products',
        	'products/:id': 'productDetail',
        	'list': 'productsList',
        	'basket': 'productBasket',
        	'*path': 'products'
        },

        products: function(){
        	Utils.log('Rendering: ProductsView');
            this.current = "products";
        },

        productsList: function(){
        	Utils.log('Rendering: ProductsListView');
            this.current = "list";
        },

        productDetail: function(id){
        	Utils.log('Rendering: ProductDetailView');
            this.current = "detail";
        },

        productBasket: function(){
        	Utils.log('Rendering: ProductBasketView');
            this.current = "basket";
        }

    });

    var router = new Router();

    React.render(
      <InterfaceRouter router={router} />,
      $('#main-content')[0]
    );

    return router;
});
