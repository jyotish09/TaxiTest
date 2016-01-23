(function () {
    'use strict';

    var taxiTest = angular.module('taxiTest', ['firebase', 'ngMaterial', 'angular-md5', 'ui.router']);

    taxiTest.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

                .state('login', {
                    url: '/login',
                    templateUrl: 'components/auth/authView.html'
                })

                .state('home', {
                    url: '/home',
                    templateUrl :'components/home.html'
                })
                
                .state('bug',{
                    url:'/bug',
                    templateUrl:'components/bug/bugView.html' //https://material.angularjs.org/latest/demo/input - CodePen Sample
                });


    });

})();
