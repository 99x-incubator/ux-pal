(function (angular) {
    'use strict';

    angular.module('ux')
        .config(appConfig)
        .run(appRun);

    function appConfig($stateProvider, $locationProvider, $urlRouterProvider) {

        //$locationProvider.html5Mode(true);
        //$urlRouterProvider.otherwise('/home/');
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: '/components/home/home.html'
            })
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: '/components/dashboard/dashboard.html'
            })
            .state('define', {
                url: "/define",
                templateUrl: '/components/define/define.html'
            })
            .state('ideate', {
                url: "/ideate",
                templateUrl: '/components/ideate/ideate.html'
            })
            .state('strategy', {
                url: "/strategy",
                templateUrl: '/components/strategy/strategy.html'
            })
            .state('proto', {
                url: "/proto",
                templateUrl: '/components/prototype/prototype.html'
            });
    }

    function appRun() {

    }

})(angular);