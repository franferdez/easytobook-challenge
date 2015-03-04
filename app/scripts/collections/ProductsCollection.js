'use strict';

define( function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        g = require('global'),
        BaseCollection = require('collections/BaseCollection'),
        ProductModel = require('models/ProductModel'),
        Utils = require('helpers/utils');

    var ProductsCollection = BaseCollection.extend({

        model: ProductModel,

        initialize: function() {
            this.dispatchToken = g.dispatcher.register(_.bind(this.dispatchCallback,this));
        },

        dispatchCallback: function(payload){
            switch(payload.actionType) {
                case g.constants.PRODUCT_ADD:
                    this.add(payload.product);
                    Utils.log('PRODUCT_ADD');
                    break;

                case g.constants.PRODUCT_UPD:
                    if( this.get(payload.product.get('id')))
                        this.get(payload.product.get('id')).set(payload.product.attributes);
                    Utils.log('PRODUCT_UPD');
                    break;

                case g.constants.PRODUCT_DEL:
                    this.remove(payload.product);
                    Utils.log('PRODUCT_DEL');
                    break;
            }
        }

    });

    return ProductsCollection;
});
