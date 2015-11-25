/**
 * Created by Kuba on 2015-11-05.
 */
'use strict';


angular.module('myApp.users', [])
    .factory('usersService', function () {

    })
    .controller('userCtrl', [UserController]);
function UserService() {

};

function UserController() {

    this.credentials = {
        login: '',
        password: ''
    };
    this.login = function (credentials, user) {
        var $lg_username = $('#login_username').val();
        var $lg_password = $('#login_password').val();
        if (!validateUser(credentials)) {
            msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Login error");
        } else {
            msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "success", "glyphicon-ok", "Login OK");
            user.name = "John";
            user.lastName = "Smith";
            user.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Grzegorz_P_Pawlak1.jpg/160px-Grzegorz_P_Pawlak1.jpg";
            setTimeout(
                function () {
                    $('#login-modal').modal('hide');
                }, 1200);
        }
    };

    this.user = {
        name: "Guest",
        lastName: "",
        image: "https://cursurideactorie.files.wordpress.com/2010/10/unknown-person.gif"
    }
}


function validateUser(credentials) {
    return credentials.login == "admin" &&
        credentials.password == "1234";
}