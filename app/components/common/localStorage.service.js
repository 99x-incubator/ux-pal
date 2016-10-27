(function () {
    'use strict';
    angular.module('ux').factory('localStorageService', LocalStorageService);

    function LocalStorageService() {

        var service = {
            setUserInfo:setUserInfo,
        };
        return service;

        function setUserInfo(projectData) {
            localStorage.setItem("projectData",projectData);
        }

    }
})();