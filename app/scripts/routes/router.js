/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
        	'products': 'products',
        	'products/:id': 'productDetail',
        	'productslist': 'productsList',
        	'basket': 'productBasket'
        },

        products: function(){
        	console.log('products');
        },

        productsList: function(){
        	console.log('productsList');
        },

        productDetail: function(id){
        	console.log('productDetail');
        },

        productBasket: function(){
        	console.log('productBasket');
        }

    });

    return Router;
});
