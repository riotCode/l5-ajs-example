'use strict';

var app = angular.module('myApp.controllers', []);

app.controller('ItemListCtrl', ['$scope', 'ItemFactory', '$location',
	function ($scope, ItemFactory, $location) {
		$scope.items = null;
		var items = ItemFactory.query(function(res){
			$scope.items = res;
		});

		$scope.update = function(item) {
			var newItem = new ItemFactory(item);
			ItemFactory.save(newItem, function(res) {
				// refresh?
			});
		};
	}
]);
