'use strict';

var accomplishFactory = function($http){
    var service = {};

    service.getDuties = function($scope) {
        $http.get('accomplish/accomplishData.json')
            .success(function(data) {
                $scope.awaiting_duties = data;
            });
        return service;
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
        accomplishFactory.getDuties($scope);
        $scope.accomplish = function (id) {
            $scope.awaiting_duties[id].status = 1;
        };

        $scope.dayCounter = function (date) {

            var dateNow = new Date();
            var parts = date.split('-');
            var formattedDate = new Date(parts[0], parts[1] - 1, parts[2]);

            var a = dateNow.setHours(0, 0, 0, 0) - formattedDate;
            a = Math.round((a * 1.15740741) / 100000000);

            if (a === 0)
                return "today";
            else if (a > 14)
                return "on " + date;
            else
                return a + " days ago";
        }
    }])

    .factory('accomplishFactory', ['$http', accomplishFactory]);