'use strict';

/* This file is for defining all  globals methos and variables */

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      ProductsCollection = require('collections/ProductsCollection'),
      json = require('text!vendor/products.json'),
      Dispatch = require('dispatcher'),
      Utils =require('helpers/Utils')


    var global  = (function(){
		/* ****** Privates ******* */

		var constants = {
	    		PRODUCT_ADD: 'PRODUCT_ADD',
	    		PRODUCT_UPD: 'PRODUCT_UPD',
	    		PRODUCT_DEL: 'PRODUCT_DEL'
	    	},

			store = [],

			addStrore = function(namespace, instance){
				if(!this.store['namespace']){
					this.store['namespace'] = instance;
				}else{
					Utils.log('You already stored a instace in that namespace');
				}
			},

			getStrore = function(namespace){
				if(this.store['namespace']){
					return this.store['namespace'];
				}else{
					Utils.log('You dont have an instance whit that namespace');
				}
			},

    		dispatcher = new Dispatch.Dispatcher;

		/* ****** Reveal Globals ******* */
		return {
			constants: constants,
			dispatcher: dispatcher
		};

	})();

    return global;
});



