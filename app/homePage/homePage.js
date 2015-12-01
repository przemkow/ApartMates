'use strict';

angular.module('myApp.homePage', ['ngRoute', 'ui.calendar'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/homePage', {
            templateUrl: 'homePage/homePage.html',
            controller: 'homePageCtrl'
        });
    }])

    .controller('homePageCtrl', ['$scope', 'homePageFactory', 'announcementFactory', function ($scope, homePageFactory, announcementFactory) {
        $scope.duties;
        $scope.calendarEvents = [];

        announcementFactory.getAnnouncements().then(function (response) {
            $scope.announces = response.data;

            angular.forEach($scope.announces, function (value, key) {
                var temp_object = {
                    title: value.desc,
                    start: value.eventDate,
                    stick: true
                };
                this.push(temp_object);
            }, $scope.calendarEvents);
        });

        homePageFactory.getDuties().then(function (response) {
            $scope.duties = response.data;
            angular.forEach($scope.duties, function (value, key) {
                var temp_object = {
                    title: value.title,
                    start: value.deadline,
                    stick: true
                };
                this.push(temp_object);
            }, $scope.calendarEvents);


            //custom filter
            $scope.afterToday = function () {
                return function (item) {
                    return item.start >= new moment().format("YYYY-MM-DD");
                }
            }

            $scope.humanizeTime = function (date) {
                return moment(date, "YYYY-MM-DD").fromNow();
            }
        });

        $scope.eventSources = [{
            events: $scope.calendarEvents
        }
        ];

        $scope.uiConfig = {
            calendar: {
                height: 450,
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'year month basicWeek'
                },
                dayClick: $scope.alertEventOnClick,
                eventResize: $scope.alertOnResize
            }
        };
    }])

    .factory('homePageFactory', ['$http', function ($http) {
        var service = {};

        service.getDuties = function () {
            return $http.get('accomplish/accomplishData.json');
        };

        return service;
    }])

