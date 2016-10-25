(function (angular) {
    'use strict';

    angular.module('ux')
        .config(appConfig)
        .run(appRun);
        angular.module('ux').config(angularToastrConfig);

    function appConfig($stateProvider, $locationProvider, $urlRouterProvider) {

        // $locationProvider.html5Mode(true);
        //$urlRouterProvider.otherwise('/home/');
        $stateProvider
            .state('getStart', {
                url: "/getStart",
                templateUrl: '/components/getStart/getStart.html',
                controller: "getStartCtrl",
                controllerAs: "getStartCtrl"
            })
			.state('login', {
                url: "/login",
                templateUrl: '/components/login/login.html'
            })
            .state('navbar', {
                url: "/navbar",
                templateUrl: '/components/navbar/navbar.html'
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
            .state('documentList', {
                url: "/documentList",
                templateUrl: '/components/documentList/documentList.html'
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

    function angularToastrConfig(toastrConfig) {
        angular.extend(toastrConfig, {
            allowHtml: false,
            closeButton: false,
            closeHtml: '<button>&times;</button>',
            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            messageClass: 'toast-message',
            onHidden: null,
            onShown: null,
            onTap: null,
            progressBar: false,
            tapToDismiss: true,
            positionClass: 'toast-top-right',
            timeOut: 10000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });
    };

    function appRun() {

    }

})(angular);