(function (angular) {
    'use strict';

    angular.module('ux')
        .config(appConfig)
        .run(appRun);

    function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        //$locationProvider.html5Mode(true);
        //$urlRouterProvider.otherwise('/logbook/1');
    }

    function appRun() {

    }

})(angular);