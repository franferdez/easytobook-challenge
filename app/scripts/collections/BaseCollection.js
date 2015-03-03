'use strict';

define([
    'underscore',
    'backbone',
    'models/BaseModel'
], function (_, Backbone, BaseModel) {

    var BaseCollectionCollection = Backbone.Collection.extend({
        model: BaseModel,

        /**
         * backbone init method
         */
        initialize: function() {
            this.dispatchId = Dispatcher.register(this.handleDispatch.bind(this));
        },

        /**
         * handle the dispatcher actions
         * @param {Object} payload
         */
        handleDispatch: function(payload) { 
        },
    });

    return BaseCollectionCollection;
});
