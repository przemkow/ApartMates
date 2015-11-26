'use strict';

angular.module('myApp.announcement', ['ngRoute', 'ui.select2'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/announcement', {
            templateUrl: 'announcement/announcement.html',
            controller: 'announcementCtrl'
        });
    }])

    .controller('announcementCtrl', ['$scope', 'announcementFactory', 'userFactory', function ($scope, announcementFactory, userFactory) {
        userFactory.getPeople().then(function(response){
            $scope.usersList = response.data;
        });

        announcementFactory.getAnnouncements().then(function(response){
            $scope.announcesList = response.data;
        });

        var checked;
        $scope.selection = {};
        $scope.announce = {usersList: {}};

        $scope.updateAll = function () {
            checked = $scope.announce.all;
            $scope.usersList.forEach(function (sharedUser) {
                $scope.announce.usersList[sharedUser.id] = checked;
            });
        };

        $scope.dayCounter = function (date) {
            return moment(date, "YYYY-MM-DD").fromNow();
        }

        $scope.save = function () {

            $scope.announce.date = new moment();
            $scope.announce.user_name = $scope.currentUser.name; //dodac aktualnego uzytkownika
            $scope.announcesList.push($scope.announce);

            $scope.announce = {};
            $scope.newAnnounce = false;
            $scope.btnAddAnn = false;
        };

        $scope.cancel = function () {
            $scope.announce = {};
            $scope.newAnnounce = false;
            $scope.btnAddAnn = false;
        };
    }])


    .factory('announcementFactory', ['$http', function($http){
        var factory = {};
        factory.announcements = {};
        factory.getAnnouncements = function () {
            return $http.get('announcement/announcementData.json')
        };

        return factory;
    }]);