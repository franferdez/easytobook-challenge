'use strict';

/* This file is for defining all  globals methos and variables */

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      ProductCollection = require('collections/ProductCollection'),
      json = require('text!vendor/products.json');


    var global  = (function(){
		/* ****** Privates ******* */
		
		// Normally i use model.fetch() but in this case i cant use an ajax call because of the cross-domain policy
    	var products = new ProductCollection(JSON.parse(json));

		/* ****** Reveal Globals ******* */
		return {
			products: products // I add the model to global to always use the same instance. 
		};

	})();

    return global;
});



