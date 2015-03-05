'use strict';

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      React = require('react'),
      BasketAction = require('actions/BasketAction');


  var ProductListItemComponent =  React.createClass({
    addToCart: function(){
        BasketAction.add(this.props.model);
    },

    render: function(){
        var model = this.props.model;

        return(         
                <li className="products-list-item">
                  <a href={'#product/'+model.get('id')}>
                    <img src={'images/products/' + model.get('img_md')} alt={model.get('name')} />
                  </a>
                  <div className="caption">
                    <h3>{model.get('name')}</h3>
                    <p className="price">{model.get('price') + ' EUR'}</p>
                    <button type="button" className="btn btn-info" onClick={this.addToCart}>Add to Basket</button>
                  </div>
                  <div className="clearfix" />
                </li>
        );
    }
  });
  
  return ProductListItemComponent;
});