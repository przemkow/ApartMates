'use strict';

angular.module('myApp.announcement', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/announcement', {
            templateUrl: 'announcement/announcement.html',
            controller: 'announcementCtrl'
        });
    }])

    .controller('announcementCtrl', ['$scope', 'announcementFactory', function ($scope, usersService) {
        usersService.getPeople($scope);

        var checked;
        $scope.selection = {};
        $scope.announce = {usersList: {}};

        $scope.updateAll = function (announce) {
            checked = $scope.announce.all;
            $scope.usersList.forEach(function (sharedUser) {
                $scope.announce.usersList[sharedUser.id] = checked;
            });
        };

        $scope.save = function () {
        }
    }])


    .factory('announcementFactory', ['$http', usersService]);

