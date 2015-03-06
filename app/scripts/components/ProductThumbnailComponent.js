'use strict';

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      React = require('react'),
      BasketAction = require('actions/BasketAction');


  var ProductThumbnailComponent =  React.createClass({
    addToCart: function(){
        BasketAction.add(this.props.model);
    },

    render: function(){
        var model = this.props.model;

        return(         
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <a href={'#product/'+model.get('id')}>
                  <img src={'images/products/' + model.get('img_md')} alt={model.get('name')} />
                </a>
                <h3>{model.get('name')}</h3>
                <div className="caption">
                  <p className="price">{model.get('price') + ' EUR'}</p>
                  <button type="button" className="btn btn-info add-basket" onClick={this.addToCart}>Add to Basket</button>
                </div>
              </div>
            </div>
        );
    }
  });
  
  return ProductThumbnailComponent;
});