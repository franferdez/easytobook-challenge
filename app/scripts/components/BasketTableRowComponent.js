'use strict';

define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      React = require('react');

  var BasketTableRowComponent =  React.createClass({

    removeItem: function(e){
      e.preventDefault();
      BasketAction.remove(this.props.model);
    },

    render: function(){
        var model = this.props.model;

        return(         
         <tr>
            <td><a href={'#product/'+model.get('id')}>{model.get('name')}</a></td>
            <td>1</td>
            <td>{model.get('price') + ' EUR'}</td>
            <td>
              <a href="#" title="remove" aria-label="remove" onClick="this.removeItem">
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </a>
            </td>
          </tr>
        );
    }
  });
  
  return BasketTableRowComponent;
});