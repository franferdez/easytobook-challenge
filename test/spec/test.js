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

		it('global should be able to store a collection',function(){
			expect(g).to.exist;
			g.addStore('products',new ProductsCollection(JSON.parse(json).products));
			expect(g.getStore('products')).to.be.instanceOf(ProductsCollection);
		});
		
		it('global should fail when you try to store a stored collection',function(){
			expect(g).to.exist;
			//g.addStore('products',ProductsCollection);
			expect(g.addStore('products',new ProductsCollection)).to.fail;
		});

		it('global should fail when you try to get a non existing collection',function(){
			expect(g).to.exist;
			expect(g.getStore('www')).to.be.equal(false);
		});


		describe('ProductsCollection and actions', function() {

			it('ProductsCollection should parse the json',function(){
				var collection = new ProductsCollection(JSON.parse(json).products);
				expect(collection.models[0]).to.be.instanceOf(ProductModel);
				expect(collection.models[0].get('id')).to.be.equal('1751463876');
			});

			
			it('ProductsCollection should add a new model by add action',function(){
				expect(g).to.exist;
				//g.addStore('products', new ProductsCollection(JSON.parse(json).products));
				var model = new ProductModel({name: 'test'});
				ProductsAction.add(model);
				expect(g.getStore('products').get(0).get('name')).to.be.equal('test');
			});

			it('ProductsCollection should update a model by update action',function(){
				expect(g).to.exist;
				//g.addStore('products', new ProductsCollection(JSON.parse(json).products));
				var model = g.getStore('products').get('1751463876');
				model.set('test');
				ProductsAction.update(model);
				expect(g.getStore('products').get('1751463876').get('name')).to.be.equal('test');
			});
			
			it('ProductsCollection should delete a  model by delete action',function(){
				expect(g).to.exist;
				//g.addStore('products', new ProductsCollection(JSON.parse(json).products));
				var model = g.getStore('products').get('1751463876');
				ProductsAction.delete(model);
				expect(g.getStore('products').get('1751463876')).to.not.exist;
			});

		});

    });
});