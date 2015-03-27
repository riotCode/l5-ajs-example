'use strict';

var app = angular.module('myApp.controllers', []);

app.controller('ItemListCtrl', ['$scope', 'ItemFactory', '$location',
	function ($scope, ItemFactory, $location) {
		$scope.items = null;
		ItemFactory.query(function(res){
			$scope.items = res;
		});
		
		//console.log($scope.items);
	}
]);
