'use strict';

angular.module('myApp.announcement', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/announcement', {
            templateUrl: 'announcement/announcement.html',
            controller: 'announcementCtrl'
        });
    }])

    .controller('announcementCtrl', ['$scope', 'announcementFactory', function ($scope, announcementFactory) {

        $scope.usersList = announcementFactory.getData;
        var checked;

        $scope.updateAll = function (announce) {
            checked = $scope.announce.all;
            $scope.usersList.forEach(function (sharedUser) {
                $scope.announce.usersList[sharedUser.id] = checked;
            });
        };

        $scope.save = function () {
        }
    }])


    .factory('announcementFactory', function () {
        return {
            getData: [
                {id: 0, user_name: "Monika"},
                {id: 1, user_name: "Kuba"},
                {id: 2, user_name: "Mikołaj"},
                {id: 3, user_name: "Przemek"},
                {id: 4, user_name: "John"}
            ]
        };
    });