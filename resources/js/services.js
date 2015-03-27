'use strict';

var app = angular.module('myApp.services', []);

app.factory('ItemFactory', function ($resource, CSRF_TOKEN) {
	return $resource('/item', { 'csrf_token': CSRF_TOKEN }, {
		query: { method: 'GET', isArray: true },
		create: { method: 'POST' }
	})
});
