'use strict';

define(function(require){
	var $ = require('jquery'),
      	_ = require('underscore'),
      	g = require('global'),
      	dispatch = require('helpers/dispatch');

	return {
	    add: function(product) {
	        dispatch(g.constants.BASKET_ADD, { product: product });
	    },
	    update: function(product) {
	        dispatch(g.constants.BASKET_UPD, { product: product });
	    },
	    remove: function(product) {
	       dispatch(g.constants.BASKET_DEL, { product: product });
	    }
	};
});
