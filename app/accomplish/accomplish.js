'use strict';

angular.module('myApp.accomplish', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/accomplish', {
            templateUrl: 'accomplish/accomplish.html',
            controller: 'accomplishCtrl'
        });
    }])

    .controller('accomplishCtrl', ['$scope', 'accomplishFactory', function ($scope, accomplishFactory) {

        $scope.awaiting_duties = accomplishFactory.getData;
        $scope.accomplish = function (id) {
            $scope.awaiting_duties[id].status = 1;
            $scope.complaintsList = false;
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

    .factory('accomplishFactory', function () {
        var rejectInfo = [{
            user_name: 'Kuba',
            msg: "jest brudno",
            date: "2015-11-23",
            image: "https://cursurideactorie.files.wordpress.com/2010/10/unknown-person.gif"
        },
            {
                user_name: 'Mikołaj',
                msg: "bo nie",
                date: "2015-11-20",
                image: "https://cursurideactorie.files.wordpress.com/2010/10/unknown-person.gif"
            },
            {
                user_name: 'Przemek',
                msg: "syf i tyle",
                date: "2015-10-20",
                image: "https://cursurideactorie.files.wordpress.com/2010/10/unknown-person.gif"
            }];


        return {
            getData: [
                {
                    id: 0,
                    title: 'Kitchen cleaning',
                    resp_person: 'Monika',
                    deadline: "2015-11-21",
                    status: 0,
                    reject_info: ""
                },
                {
                    id: 1,
                    title: 'Bathroom cleaning',
                    resp_person: 'Monika',
                    deadline: "2015-12-01",
                    status: 0,
                    reject_info: rejectInfo
                },
                {
                    id: 2,
                    title: 'Living room cleaning',
                    resp_person: 'Monika',
                    deadline: "2015-11-16",
                    status: -1,
                    reject_info: rejectInfo
                }
            ]
        };
    });