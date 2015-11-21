'use strict';

angular.module('myApp.aprove', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aprove', {
    templateUrl: 'aprove/aprove.html',
    controller: 'aprove'
  });
}])

.controller('aprove', ['$scope', 'aproveFactory', function($scope, aproveFactory) {
  $scope.awaiting_duties = aproveFactory.getData;
  $scope.aprove = function(id){
    $scope.awaiting_duties[id].rejected = false;
    $scope.awaiting_duties[id].approved = true;
  };

  $scope.reject = function(id){
    $scope.awaiting_duties[id].rejected = true;
    $scope.awaiting_duties[id].approved = false;
    $scope.awaiting_duties[id].rejected_msg = "message";
  }
}])

.factory('aproveFactory', function() {
  return {
    getData :[
      {id: 0, title: 'Kitchen cleaning', resp_person:'Monika', approved: false, rejected: false, rejected_msg:""},
      {id: 1, title: 'Batchroom cleaning', resp_person:'Kuba', approved: false, rejected: false, rejected_msg:""}
    ]
  };
});