'use strict';

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      React = require('react');


  var ProductDetailView =  React.createClass({
    render: function(){
        var model = this.props.model;

        var description = model.get('description').split(';');



        return(         
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <img src={'images/products/' + model.get('img_md')} alt={model.get('name')} />
                  <div className="caption">
                    <h3>{model.get('name')}</h3>
                    {description.map(function(text) {
                      return (<p>{text}</p>);   
                    })}
                    <p><a href="#" className="btn btn-primary" role="button">Button</a> 
                       <a href="#" className="btn btn-default" role="button">Button</a>
                    </p>
                  </div>
                </div>
              </div>
        );
    }
  });
  
  return ProductDetailView;
});