'use strict';

define([
    'underscore',
    'backbone',
    'collections/BaseCollection',
    'models/ProductModel'
], function (_, Backbone, BaseCollection,ProductModel) {

    var ProductCollection = BaseCollection.extend({

        model: ProductModel,

        initialize: function() {
        }

    });

    return ProductCollection;
});
