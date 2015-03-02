'use strict';

define([
    'underscore',
    'backbone',
    'models/BaseModel'
], function (_, Backbone, BaseModel) {

    var ProductModel = BaseModel.extend({

        initialize: function() {
        },

        defaults: {
            id: '',
            name: '',
            description: '',
            img_md: '',
            img_bg: '',
            price: '',
            qty: ''
        }
    });

    return ProductModel;
});
