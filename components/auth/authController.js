(function () {

    'use strict';

    angular.module('taxiTest').controller('AuthController', AuthController);

    function AuthController(Auth, User, $state) {

        var vm = this;

        vm.createUser = createUser;
        vm.login = login;

        function createUser() {

            // If there is already a user logged in, log them out before proceeding
            Auth.$unauth();
            console.log("Logged In User , Logged Out First");
            Auth.$createUser({
                email: vm.email,
                password: vm.password
            }, function (error, userData) {
                if (error) {
                    switch (error.code) {
                        case "EMAIL_TAKEN":
                            console.log("The new user account cannot be created because the email is already in use.");
                            break;
                        case "INVALID_EMAIL":
                            console.log("The specified email is not a valid email.");
                            break;
                        default:
                            console.log("Error creating user:", error);
                    }
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            }).then(function (userData) {

                saveUser(userData);
                login();
            }).catch(function (error) {
                vm.error = error;
                console.log("Error :", error);
            });
        }

        function saveUser(userData) {

            var user = User.newUserRef(userData);
            user.username = vm.username;
            user.email = vm.email;

            user.$save().then(function (success) {
                vm.username = null;
                vm.email = null;
                vm.password = null;

                $state.go('online');
            }, function (error) {
                console.log("there was an error! " + error);
            });
        }

        function login() {
            console.log("Login Fn()");
            Auth.$authWithPassword({
                email: vm.email,
                password: vm.password
            }).then(function (data) {
                vm.email = null;
                vm.password = null;
                $state.go('online');
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

})();
