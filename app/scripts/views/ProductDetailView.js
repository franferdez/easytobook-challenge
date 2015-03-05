'use strict';

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      React = require('react'),
      BaseTemplate = require('jsx!components/BaseTemplateComponent'),
      BasketAction = require('actions/BasketAction');


  var ProductDetailView =  React.createClass({
    addToCart: function(){
        BasketAction.add(this.props.model);
    },

    render: function(){
        var model = this.props.model;

        var description = model.get('description').split(';');

        return(         
            <BaseTemplate>
              <div className="product-detail row">
                <div className="col-md-6">
                  <img src={'images/products/' + model.get('img_bg')} alt={model.get('name')} />
                </div>
                <div className="caption col-md-6">
                  <h3>{model.get('name')}</h3>
                  {description.map(function(text) {
                    return (<p>{text}</p>);   
                  })}
                  <p>
                    <button type="button" className="btn btn-info add-basket" onClick={this.addToCart}>Add to Basket</button>
                  </p>
                </div>
              </div>
            </BaseTemplate>
        );
    }
  });
  
  return ProductDetailView;
});