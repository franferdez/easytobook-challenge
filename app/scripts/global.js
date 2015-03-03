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
				if(!this.store[namespace]){
					this.store[namespace] = instance;
				}else{
					throw new Error('You already stored a instace in that namespace');
				}
			},

			getStore = function(namespace){
				if(this.store[namespace]){
					return this.store[namespace];
				}else{
					throw new Error('You dont have an instance whit that namespace');
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



