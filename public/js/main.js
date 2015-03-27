'use strict';
 
var app = angular.module('myApp', ['ngRoute', 'ngResource','myApp.services','myApp.controllers']);
 
app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/partials/item/index.html',
		controller: 'ItemListCtrl'
	});
	$routeProvider.otherwise({templateUrl:'app/partials/404.html'});
});

'use strict';

var app = angular.module('myApp.services', []);

app.factory('ItemFactory', function ($resource, CSRF_TOKEN) {
	return $resource('/item', { 'csrf_token': CSRF_TOKEN }, {
		query: { method: 'GET', isArray: true },
		create: { method: 'POST' }
	})
});

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
