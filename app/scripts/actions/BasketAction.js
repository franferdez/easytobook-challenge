'use strict';

define(function(require){
	var $ = require('jquery'),
      	_ = require('underscore'),
      	g = require('global'),
      	dispatch = require('helpers/dispatch'),
      	ProductsAction = require('actions/ProductsAction');

	return {
	    add: function(product) {
	        dispatch(g.constants.BASKET_ADD, { product: product });
	        ProductsAction.remove(product);
	    },
	    update: function(product) {
	        dispatch(g.constants.BASKET_UPD, { product: product });
	    },
	    remove: function(product) {
	       dispatch(g.constants.BASKET_DEL, { product: product });
	       ProductsAction.add(product);
	    }
	};
});
