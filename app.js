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
                    templateUrl: 'components/home.html'
                })

                .state('bug', {
                    url: '/bug',
                    templateUrl: 'components/bug/bugView.html'
                });
    });

    taxiTest.config(function ($mdThemingProvider) {
        $mdThemingProvider.definePalette('customPalette', {
            '50': 'ffebee',
            '100': 'ffcdd2',
            '200': 'ef9a9a',
            '300': 'e57373',
            '400': 'ef5350',
            '500': 'f44336',
            '600': 'e53935',
            '700': 'd32f2f',
            '800': 'c62828',
            '900': 'b71c1c',
            'A100': 'ff8a80', //Only this one is used
            'A200': 'ff5252',
            'A400': 'ff1744',
            'A700': 'd50000'
        });
        
        var lightBlueMap = $mdThemingProvider.extendPalette('blue',{'A100':'78BDE7'});
        $mdThemingProvider.definePalette('lightBlue',lightBlueMap);
        $mdThemingProvider.theme('customPalette', 'default').primaryPalette('customPalette').backgroundPalette('lightBlue');
    });


})();
