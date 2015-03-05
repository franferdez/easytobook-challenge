'use strict';

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      React = require('react');


  var ProductListItemComponent =  React.createClass({
    render: function(){
        var model = this.props.model;

        return(         
                <li className="products-list-item">
                  <img src={'images/products/' + model.get('img_md')} alt={model.get('name')} />
                  <div className="caption">
                    <h3>{model.get('name')}</h3>
                    <p className="price">{model.get('price') + ' EUR'}</p>
                  </div>
                  <div className="clr" />
                </li>
        );
    }
  });
  
  return ProductListItemComponent;
});