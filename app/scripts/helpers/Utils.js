'use strict';

define(function(require){
   var $ = require('jquery'),
      _ = require('underscore');


    var Utils  = (function(){
		/* ****** Privates ******* */
			 

		/* ****** Reveal Globals ******* */
		return {
			debug: true,
			
			log: function(){
				if(this.debug && console){
					console.log.apply(console,arguments);
				}
			},

			inherit: function(obj){
				// Object.create polyfill 
				function CloneFactory () {}
			    CloneFactory.prototype = obj;
			    return new CloneFactory();
			}
		};

	})();

    return Utils;
});
