'use strict';

angular.module('myApp.accomplish', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accomplish', {
    templateUrl: 'accomplish/accomplish.html',
    controller: 'accomplish'
  });
}])

.controller('accomplish', [function() {

}]);