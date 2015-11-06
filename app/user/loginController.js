/**
 * Created by Kuba on 2015-11-05.
 */


var $formLogin = $('#login-form');
var $formLost = $('#lost-form');
var $formRegister = $('#register-form');
var $divForms = $('#div-forms');
var $modalAnimateTime = 300;
var $msgAnimateTime = 150;
var $msgShowTime = 2000;


function LoginController($scope, userService) {
    this.credentials = {
        login: '',
        password: ''
    };
    $scope.login = function(credentials) {
        var $lg_username = $('#login_username').val();
        var $lg_password = $('#login_password').val();
        if (!validateUser(credentials)) {
            msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Login error");
        } else {
            msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "success", "glyphicon-ok", "Login OK");
            setTimeout(
                function()
                {
                    userService.setUser( "John", "Smith", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Grzegorz_P_Pawlak1.jpg/160px-Grzegorz_P_Pawlak1.jpg");
                    $('#login-modal').modal('hide');
                }, 1200);
        }
    };
};

function validateUser(credentials){
    return credentials.login=="admin" &&
            credentials.password == "1234";
}

function modalAnimate($oldForm, $newForm) {
    var $oldH = $oldForm.height();
    var $newH = $newForm.height();
    $divForms.css("height", $oldH);
    $oldForm.fadeToggle($modalAnimateTime, function () {
        $divForms.animate({height: $newH}, $modalAnimateTime, function () {
            $newForm.fadeToggle($modalAnimateTime);
        });
    });
}

function msgFade($msgId, $msgText) {
    $msgId.fadeOut($msgAnimateTime, function () {
        $(this).text($msgText).fadeIn($msgAnimateTime);
    });
}

function msgChange($divTag, $iconTag, $textTag, $divClass, $iconClass, $msgText) {
    var $msgOld = $divTag.text();
    msgFade($textTag, $msgText);
    $divTag.addClass($divClass);
    $iconTag.removeClass("glyphicon-chevron-right");
    $iconTag.addClass($iconClass + " " + $divClass);
    setTimeout(function () {
        msgFade($textTag, $msgOld);
        $divTag.removeClass($divClass);
        $iconTag.addClass("glyphicon-chevron-right");
        $iconTag.removeClass($iconClass + " " + $divClass);
    }, $msgShowTime);
}