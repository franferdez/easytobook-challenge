'use strict';

define(function(require){
   var $ = require('jquery'),
      _ = require('underscore'),
      g = require('global');


    return function(actionType, payload) {
	    payload = payload || {};
	    payload.actionType = actionType;
	    return g.dispatcher.dispatch(payload)
	};
	
});