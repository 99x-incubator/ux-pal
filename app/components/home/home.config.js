(function (angular) {
    "use strict";
    
    angular.module("ux.home").config(routeConfig);
    routeConfig.$inject = ['$stateProvider'];
    
    function routeConfig($stateProvider) {
        var home = {
            url: '/home',
            templateUrl: 'components/home/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        };
        $stateProvider.state('ux.home', home);
    }
    
})(angular);