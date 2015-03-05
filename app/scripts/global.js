'use strict';

/* This file is for defining all  globals methos and variables */

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      Dispatch = require('dispatcher'),
      Utils = require('helpers/Utils');


    var global  = (function(){
		/* ****** Privates ******* */

		var constants = {
	    		PRODUCT_ADD: 'PRODUCT_ADD',
	    		PRODUCT_UPD: 'PRODUCT_UPD',
	    		PRODUCT_DEL: 'PRODUCT_DEL',
	    		BASKET_ADD: 'BASKET_ADD',
	    		BASKET_UPD: 'BASKET_UPD',
	    		BASKET_DEL: 'BASKET_DEL'
	    	},

    		dispatcher = new Dispatch.Dispatcher();

		/* ****** Reveal Globals ******* */
		return {
			constants: constants,
			dispatcher: dispatcher
		};

	})();

    return global;
});



