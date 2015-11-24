'use strict';

var approveService = function($http){

  var service = {};
  service.awaiting_duties = {}
  service.getDuties = function($scope) {
    $http.get('approve/approveData.json')
        .success(function(data) {
          $scope.awaiting_duties = data;
          service.awaiting_duties =  data;
        });
    return service.awaiting_duties;
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
  approveFactory.getDuties($scope);
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