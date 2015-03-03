'use strict';

define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var BaseModel = Backbone.Model.extend({
        url: '',

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

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return BaseModel;
});
