'use strict';

define(function(require){
	var $ = require('jquery'),
      	_ = require('underscore'),
      	g = require('global')

	return {
	    add: function(text) {
	        g.dispatch(g.constants.PRODUCT_ADD, { product: product });
	    },
	    toggle: function(todo) {
	        g.dispatch(g.constants.PRODUCT_UPD, { product: product });
	    },
	    remove: function(todo) {
	        g.dispatch(g.constants.PRODUCT_DEL, { product: product });
	    }
	};
});
