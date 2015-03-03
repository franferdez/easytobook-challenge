'use strict';

define(function(require) {

  	var _ = require('underscore'),
  		$ = require('jquery'),
        Backbone = require('backbone'),
  		g = require('global'),
  		json = require('text!vendor/products.json'),
  		ProductsCollection = require('collections/ProductsCollection'),
  		ProductModel = require('models/ProductModel'),
  		ProductsAction = require('actions/ProductsAction');

	describe('Stored Products', function () {

		it('Products.json is a valid json', function(){
			expect(JSON.parse(json).products).to.be.instanceof(Array);
		});

		it('ProductsCollection should parse the json',function(){
			var collection = new ProductsCollection(JSON.parse(json));
			expect(collection.models[0]).to.be.instanceOf(ProductModel);
			expect(collection.models[0].get('id')).to.be.equal('1751463876');
		});

		it('global should be able to store a collection',function(){
			console.log(g);
			expect(g).to.exist;
			g.addStore('products',ProductsCollection);
			expect(g.getStore('Products')).to.be.instanceOf(ProductsCollection);
		});


		describe('ProductsClass', function() {
			it('should be a stored instance of ProductsCollection',function(){

			});

		});

    });
});