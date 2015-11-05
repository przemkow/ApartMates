'use strict';

angular.module('myApp.aprove', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aprove', {
    templateUrl: 'aprove/aprove.html',
    controller: 'aprove'
  });
}])

.controller('aprove', [function() {

}]);