'use strict';
/**
 * Flux uses stores as singletons collections. 
 * I dont want to define backbone collections like singleton 
 * because i might wont to use it as a simple collection
 * i created the store object to store 
 */

define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ProductsCollection = require('collections/ProductsCollection'),
        products = require('text!vendor/products.json');

    var Store = (function() {

        // method to add more stores on runtime
        var add = function(namespace, instance){
                if(!this[namespace]){
                    this[namespace] = instance;
                }else{
                    Utils.log('You already stored a instace in that namespace');
                }
            },

            get = function(namespace){
                if(this[namespace]){
                    return this[namespace];
                }else{
                    Utils.log('You dont have an instance whit that namespace');
                    return false;
                }
            };
        
        return {
            add: add,
            get: get,
            // load the static data and parse it on the collection and add it to a global singleton 
            products: new ProductsCollection(JSON.parse(products).products)
        };

    })();

    return Store;
});
