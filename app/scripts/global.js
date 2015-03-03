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
	    		PRODUCT_DEL: 'PRODUCT_DEL'
	    	},

			store = [],

			addStore = function(namespace, instance){
				if(!store[namespace]){
					store[namespace] = instance;
				}else{
					Utils.log('You already stored a instace in that namespace');
				}
			},

			getStore = function(namespace){
				if(store[namespace]){
					return store[namespace];
				}else{
					Utils.log('You dont have an instance whit that namespace');
					return false;
				}
			},

    		dispatcher = new Dispatch.Dispatcher();

		/* ****** Reveal Globals ******* */
		return {
			constants: constants,
			dispatcher: dispatcher,
			addStore: addStore,
			getStore: getStore
		};

	})();

    return global;
});



