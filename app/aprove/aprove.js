'use strict';

angular.module('myApp.aprove', ['ngRoute', 'ngAnimate', 'mwl.confirm'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aprove', {
    templateUrl: 'aprove/aprove.html',
    controller: 'aprove'
  });
}])

.controller('aprove', ['$scope', 'aproveFactory', function($scope, aproveFactory) {
  $scope.awaiting_duties = aproveFactory.getData;
  $scope.aprove = function(id){
    $scope.awaiting_duties[id].status = 1;
  };

  $scope.reject = function(id, message){
    $scope.awaiting_duties[id].status = -1;
    $scope.awaiting_duties[id].rejected_msg = message;
  }
}])

.factory('aproveFactory', function() {
  return {
    getData :[
      {id: 0, title: 'Kitchen cleaning', resp_person:'Monika', status: 0, rejected_msg:""},
      {id: 1, title: 'Batchroom cleaning', resp_person:'Kuba', status: 0, rejected_msg:""}
    ]
  };
});