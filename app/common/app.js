'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.homePage',
  'myApp.aprove',
  'myApp.accomplish',
  'myApp.devide',
  'myApp.announcement',
  'myApp.version'
])

myApp.config(
  ['$routeProvider', function($routeProvider) {
    $routeProvider.when('/homePage', {
      title: 'AppartMates',
      templateUrl: './homePage/homePage.html',
    }).when('/aprove', {
      title: 'Waiting for approve',
      templateUrl: './aprove/aprove.html',
    }).when('/accomplish', {
      title: 'Accomplish duty',
      templateUrl: './accomplish/accomplish.html',
    }).when('/devide', {
      title: 'Devide expenses',
      templateUrl: './devide/devide.html',
    }).when('/announcement', {
      title: 'Add announcement',
      templateUrl: './announcement/announcement.html',
    }).otherwise({redirectTo: '/homePage'});
}]);

myApp.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);