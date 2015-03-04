'use strict';

define(function (require) {
    var $ = require('jquery'),
     	_ = require('underscore'),
     	React = require('react'),
     	g = require('global'),
     	Utils = require('helpers/Utils'),
     	ProductsView = require('jsx!views/ProductsView');

    var Router = Backbone.Router.extend({
        routes: {
        	'products': 'products',
        	'products/:id': 'productDetail',
        	'productslist': 'productsList',
        	'basket': 'productBasket',
        	'*path': 'products'
        },

        products: function(){
        	Utils.log('rendering ProductsView');

        	var view  = new ProductsView;
        	view.render();
        },

        productsList: function(){
        	Utils.log('productsList');
        },

        productDetail: function(id){
        	Utils.log('productDetail');
        },

        productBasket: function(){
        	Utils.log('productBasket');
        }

    });

    return Router;
});
