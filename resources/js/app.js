'use strict';
 
var app = angular.module('myApp', ['ngRoute', 'ngResource','myApp.services','myApp.controllers']);
 
app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/partials/item/index.html',
		controller: 'ItemListCtrl'
	});
	$routeProvider.otherwise({templateUrl:'app/partials/404.html'});
});
