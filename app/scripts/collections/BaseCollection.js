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

        filterCollection: function(filterFn){
            return this.filteredCollection(this, filterFn);
        },

        filteredCollection: function(original, filterFn) {
            var filtered;
         
            // Instantiate new collection
            filtered = new original.constructor();
         
            // Remove events associated with original
            filtered._callbacks = {};
         
            filtered.filterItems = function(filter) {
                var items;
                items = original.filter(filter);
                filtered._currentFilter = filterFn;
                filtered.reset(items);
                return filtered;
            };
         
            // Refilter when original collection is modified
            original.on('reset change destroy', function() {
                return filtered.filterItems(filtered._currentFilter);
            });
         
            return filtered.filterItems(filterFn);
        }
    });

    return BaseCollectionCollection;
});
