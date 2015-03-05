'use strict';

define( function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        g = require('global'),
        BaseCollection = require('collections/BaseCollection'),
        ProductModel = require('models/ProductModel'),
        Utils = require('helpers/utils');

    var BasketCollection = BaseCollection.extend({

        model: ProductModel,

        initialize: function() {
            this.dispatchToken = g.dispatcher.register(_.bind(this.dispatchCallback,this));
        },

        dispatchCallback: function(payload){
            switch(payload.actionType) {
                case g.constants.BASKET_ADD:
                    this.add(payload.product);
                    Utils.log('BASKET_ADD');
                    break;

                case g.constants.BASKET_UPD:
                    if( this.get(payload.product.get('id')))
                        this.get(payload.product.get('id')).set(payload.product.attributes);
                    Utils.log('BASKET_UPD');
                    break;

                case g.constants.BASKET_DEL:
                    this.remove(payload.product);
                    Utils.log('BASKET_DEL');
                    break;
            }
        }

    });

    return BasketCollection;
});
