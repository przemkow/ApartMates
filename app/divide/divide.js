'use strict';

angular.module('myApp.divide', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/divide', {
    templateUrl: 'divide/divide.html',
    controller: 'divide'
  });
}])

.controller('divide', [function() {

}])
