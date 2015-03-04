'use strict';

define(function(require) {

  	var _ = require('underscore'),
  		$ = require('jquery'),
        Backbone = require('backbone'),
  		g = require('global'),
  		store = require('stores/store'),
  		json = require('text!vendor/products.json'),
  		ProductsCollection = require('collections/ProductsCollection'),
  		ProductModel = require('models/ProductModel'),
  		ProductsAction = require('actions/ProductsAction');

	describe('Stored Products', function () {

		it('Products.json is a valid json', function(){
			expect(JSON.parse(json).products).to.be.instanceof(Array);
		});

		it('store should have a ProductsCollection',function(){
			expect(store).to.exist;
			expect(store.products).to.be.instanceOf(ProductsCollection);
		});
		
		it('global should fail when you try to store a stored collection',function(){
			expect(store).to.exist;
			expect(store.add('products',new ProductsCollection)).to.fail;
		});

		it('global should fail when you try to get a non existing collection',function(){
			expect(store).to.exist;
			expect(store.get('www')).to.be.equal(false);
		});

		describe('ProductsCollection and actions', function() {

			it('ProductsCollection should parse the json',function(){
				var collection = new ProductsCollection(JSON.parse(json).products);
				expect(collection.models[0]).to.be.instanceOf(ProductModel);
				expect(collection.models[0].get('id')).to.be.equal('1751463876');
			});

			
			it('ProductsCollection should add a new model by add action',function(){
				expect(store).to.exist;
				//g.addStore('products', new ProductsCollection(JSON.parse(json).products));
				var model = new ProductModel({id: '194816',name: 'test'});
				ProductsAction.add(model);
				expect(store.products.get('194816')).to.exits;
				expect(store.products.get('194816').get('name')).to.be.equal('test');
			});

			it('ProductsCollection should update a model by update action',function(){
				expect(store).to.exist;
				var length = store.products.length;
				var model = store.products.get('194816');
				model.set('name','test changed');
				ProductsAction.update(model);
				expect(store.products.length).to.be.equal(length);
				expect(store.products.get('194816').get('name')).to.be.equal('test changed');
			});
			
			it('ProductsCollection should delete a  model by delete action',function(){
				expect(store).to.exist;
				var model = store.products.get('194816');
				ProductsAction.remove(model);
				expect(store.products.get('194816')).to.not.exist;
			});

			it('ProductsCollection should be able to be filtered ',function(){
				expect(store).to.exist;
				var products = JSON.parse(json).products,
					length = store.products.length,
					filterFn1 = function(obj){
						return obj.name.indexOf('cup') >= 0;
					},
					filteredProducts = _.filter(products, filterFn1),
					filterFn2 = function(model){
						return model.get('name').indexOf('cup') >= 0;
					},
					filtered = store.products.filterCollection(filterFn2);

				expect(filtered.length).to.be.equal(filteredProducts.length);	
				expect(store.products.length).to.be.equal(length);
			});

		});

    });
});