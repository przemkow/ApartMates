'use strict';

var accomplishFactory = function ($http) {
    var service = {};

    service.getDuties = function () {
        return $http.get('accomplish/accomplishData.json');
    };

    return service;
};

angular.module('myApp.accomplish', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/accomplish', {
            templateUrl: 'accomplish/accomplish.html',
            controller: 'accomplishCtrl'
        });
    }])

    .controller('accomplishCtrl', ['$scope', 'accomplishFactory', function ($scope, accomplishFactory) {

        accomplishFactory.getDuties().then(function (response) {
            $scope.awaiting_duties = response.data;
        });

        $scope.accomplish = function (id) {
            $scope.awaiting_duties[id].status = 1;
            $scope.complaintsList = false;
        };

        $scope.dayCounter = function (date) {
            return moment(date, "YYYY-MM-DD").fromNow();
        }
    }])

    .factory('accomplishFactory', ['$http', accomplishFactory]);
