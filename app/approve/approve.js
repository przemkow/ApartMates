'use strict';

var approveService = function($http){

  var service = {};
  service.getDuties = function() {
    return $http.get('approve/approveData.json');
  };

  return service;
};

angular.module('myApp.approve', ['ngRoute', 'ngAnimate', 'mwl.confirm'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/approve', {
    templateUrl: 'approve/approve.html',
    controller: 'approve'
  });
}])

.controller('approve', ['$scope', 'approveFactory', function($scope, approveFactory) {

  approveFactory.getDuties().then(function(response){
    $scope.awaiting_duties = response.data;
  });

  $scope.approve = function(id){
    $scope.awaiting_duties[id].status = 2;
  };

  $scope.reject = function(id, message){
    $scope.awaiting_duties[id].status = -1;
    $scope.awaiting_duties[id].rejected_msg = message;
  }
}])

.factory('approveFactory', ['$http',approveService ]);
//  STATUS LIST:
// -1 = Rejected
// 0 = newAwaitingDuty
// 1 = doneWaitingForAccept
// 2 = Accepted