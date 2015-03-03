'use strict';

define( function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        g = require('global'),
        BaseCollection = require('collections/BaseCollection'),
        ProductModel = require('models/ProductModel');

    var ProductsCollection = BaseCollection.extend({

        model: ProductModel,

        initialize: function() {
            this.dispatchToken = g.dispatcher.register(this.dispatchCallback);
        },

        dispatchCallback: function(payload){
            switch(payload.actionType) {
                case g.constants.PRODUCT_ADD:
                    //this.add({ text: payload.text });
                    console.log('PRODUCT_ADD');
                    break;

                case g.constants.PRODUCT_UPD:
                    //payload.todo.toggleComplete();
                    console.log('PRODUCT_UPD');
                    break;

                case g.constants.PRODUCT_DEL:
                    //this.remove(payload.todo);
                    console.log('PRODUCT_DEL');
                    break;
            }
        }

    });

    return ProductsCollection;
});
