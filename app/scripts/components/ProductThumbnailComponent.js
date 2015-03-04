'use strict';

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      React = require('react');


  var ProductThumbnailComponent =  React.createClass({
    render: function(){
        var model = this.props.model;

        var description = model.get('description').split(';');



        return(         
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <img src={'images/products/' + model.get('img_md')} alt={model.get('name')} />
                  <div className="caption">
                    <h3>{model.get('name')}</h3>
                    <p className="price">{model.get('price') + ' EUR'}</p>
                  </div>
                </div>
              </div>
        );
    }
  });
  
  return ProductThumbnailComponent;
});