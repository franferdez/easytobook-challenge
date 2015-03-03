'use strict';

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      React = require('react');


  var ProductThumbnailComponent =  React.createClass({
    render: function(){
        var model = this.props.model;

        return(         
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <img src="..." alt="..." />
                  <div className="caption">
                    <h3>{model.get('name')}</h3>
                    <p>{model.get('description')}</p>
                    <p><a href="#" className="btn btn-primary" role="button">Button</a> 
                       <a href="#" className="btn btn-default" role="button">Button</a>
                    </p>
                  </div>
                </div>
              </div>
        );
    }
  });
  
  return ProductThumbnailComponent;
});