'use strict';

define(function(require){
	var $ = require('jquery'),
      	_ = require('underscore'),
      	g = require('global')

	return {
	    add: function(product) {
	        g.dispatch(g.constants.PRODUCT_ADD, { product: product });
	    },
	    update: function(product) {
	        g.dispatch(g.constants.PRODUCT_UPD, { product: product });
	    },
	    remove: function(product) {
	        g.dispatch(g.constants.PRODUCT_DEL, { product: product });
	    }
	};
});
