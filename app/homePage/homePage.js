'use strict';

angular.module('myApp.homePage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homePage', {
    templateUrl: 'homePage/homePage.html',
    controller: 'homePage'
  });
}])

.controller('homePage', [function() {

}]);