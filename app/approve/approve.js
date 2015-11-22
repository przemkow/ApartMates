'use strict';

angular.module('myApp.approve', ['ngRoute', 'ngAnimate', 'mwl.confirm'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/approve', {
    templateUrl: 'approve/approve.html',
    controller: 'approve'
  });
}])

.controller('approve', ['$scope', 'approveFactory', function($scope, approveFactory) {
  $scope.awaiting_duties = approveFactory.getData;
  $scope.approve = function(id){
    $scope.awaiting_duties[id].status = 1;
  };

  $scope.reject = function(id, message){
    $scope.awaiting_duties[id].status = -1;
    $scope.awaiting_duties[id].rejected_msg = message;
  }
}])

.factory('approveFactory', function() {
  return {
    getData :[
      {id: 0, title: 'Kitchen cleaning', resp_person:'Monika', status: 0, rejected_msg:""},
      {id: 1, title: 'Bathroom cleaning', resp_person:'Kuba', status: 0, rejected_msg:""}
    ]
  };
});