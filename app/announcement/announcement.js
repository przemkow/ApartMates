'use strict';

angular.module('myApp.announcement', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/announcement', {
    templateUrl: 'announcement/announcement.html',
    controller: 'announcement'
  });
}])

.controller('announcement', [function() {

}]);