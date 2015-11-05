'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.homePage',
  'myApp.aprove',
  'myApp.accomplish',
  'myApp.devide',
  'myApp.announcement',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/homePage'});
}]);