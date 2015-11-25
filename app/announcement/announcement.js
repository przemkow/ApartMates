'use strict';

var announcementService = function ($http) {

    var service = {};
    service.announcements = {};
    service.getAnnouncements = function ($scope) {
        return $http.get('announcement/announcementData.json')
    };

    return service;
};


angular.module('myApp.announcement', ['ngRoute', 'ui.select2'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/announcement', {
            templateUrl: 'announcement/announcement.html',
            controller: 'announcementCtrl'
        });
    }])

    .controller('announcementCtrl', ['$scope', 'announcementFactory', function ($scope, announcementFactory) {
        announcementFactory.getPeople().then(function(response){
            $scope.usersList = response.data;
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

            $scope.announce.date = new Date(); //momentjs zmienic date
            $scope.announce.user_name = "User"; //dodac aktualnego uzytkownika
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

        $scope.announcesList = [
            {
                "id": 0,
                "user_name": "Monika",
                "desc": "There will be no water on Monday!!",
                "eventDate" : "2015-12-07",
                "date" : "2015-11-24"
            },
            {
                "id": 1,
                "user_name": "Mikolaj",
                "desc": "studying today, don't be loud",
                "eventDate" : "2015-12-01",
                "date" : "2015-11-22"
            }
        ];


    }])


    .factory('announcementFactory', ['$http', usersService]);

