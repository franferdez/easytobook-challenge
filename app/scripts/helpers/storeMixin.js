'use strict';
/**
 * mixin to let components listen to stores in a simple way
 * the component needs to implement `onStoreUpdate` to set the state
 * @param {Object} store
 * @param {String} [events="add remove reset change"]
 */

define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    var storeMixin = function(store, events) {
        if(!events) {
            events = "add remove reset change";
        }
        return {
            componentDidMount: function() {
                store.on(events, function() {
                    this.forceUpdate();
                }, this);
            },
            componentWillUnmount: function() {
                store.off(null, null, this);
            }
        };
    };

    return storeMixin;
});
