'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.homePage',
  'myApp.approve',
  'myApp.users',
  'myApp.accomplish',
  'myApp.divide',
  'myApp.announcement',
  'myApp.version'
]);

myApp.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);