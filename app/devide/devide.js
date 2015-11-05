'use strict';

angular.module('myApp.devide', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/devide', {
    templateUrl: 'devide/devide.html',
    controller: 'devide'
  });
}])

.controller('devide', [function() {

}]);