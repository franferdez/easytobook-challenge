'use strict';

/* This file is for defining all  globals methos and variables */

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      ProductsCollection = require('collections/ProductsCollection'),
      json = require('text!vendor/products.json'),
      Dispatch = require('dispatcher');


    var global  = (function(){
		/* ****** Privates ******* */

		/* ****** Reveal Globals ******* */

		// Normally i use model.fetch() but in this case i cant use an ajax call because of the cross-domain policy

    	var constants = {
    		PRODUCT_ADD: 'PRODUCT_ADD',
    		PRODUCT_UPD: 'PRODUCT_UPD',
    		PRODUCT_DEL: 'PRODUCT_DEL'
    	}

    	var dispatcher = {};//new Dispatch.Dispatcher;


		return {
			constants: constants,
			dispatcher: dispatcher
			//products: products // I add the model to global to always use the same instance.
		};

	})();

    return global;
});



