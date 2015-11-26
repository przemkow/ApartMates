/**
 * Created by Kuba on 2015-11-05.
 */
'use strict';


angular.module('myApp.users', [])
  .factory('userFactory', ['$http',usersFactory])
  .controller('userCtrl', ['$scope', userController]);


function userController($scope) {

  var guest = {
    name: "Guest",
    lastName: "",
    guest: true,
    image: "https://cursurideactorie.files.wordpress.com/2010/10/unknown-person.gif"
  };

  $scope.user.credentials = {
    login: '',
    password: ''
  };

  $scope.login = function(credentials){
    var $lg_username = $('#login_username').val();
    var $lg_password = $('#login_password').val();
    if (!validateUser(credentials)) {
      msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Invalid login or password");
    } else {
      msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "success", "glyphicon-ok", "Welcome!");
      var user = {
        name: "Monika",
        lastName: "Smith",
        guest: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Grzegorz_P_Pawlak1.jpg/160px-Grzegorz_P_Pawlak1.jpg"
      };
      $scope.currentUser = user;
      console.log($scope.currentUser);
      setTimeout(
        function()
        {
          $('#login-modal').modal('hide');
        }, 1200);
    }

    $scope.logout = function () {
      $scope.currentUser = guest;
      $('.circular img').click()
    }
  };

  $scope.currentUser = guest;
}


function validateUser(credentials){
  return credentials.login=="admin" &&
    credentials.password == "1234";
}

function usersFactory ($http) {

  var factory = {};
  factory.people = {};
  factory.getPeople = function () {
    return $http.get('user/people.json')
  };

  return factory;
};