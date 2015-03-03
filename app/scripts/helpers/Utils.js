'use strict';

define(function(require){
   var $ = require('jquery'),
      _ = require('underscore');


    var Utils  = (function(){
		/* ****** Privates ******* */

		var debug = true,

			log = function(){
				if(this.debug && console){
					console.log.apply(console,arguments);
				}
			};

		/* ****** Reveal Globals ******* */
		return {
			debug: debug,
			log: log
		};

	})();

    return Utils;
});
