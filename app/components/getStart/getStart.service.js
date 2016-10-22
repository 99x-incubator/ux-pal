(function () {
    'use strict';

    angular.module('ux.getStart').factory('getStartService', getStartService);
    getStartService.$inject = [];

    function getStartService() {
        var service = {
            setprojectDetails: setprojectNameAndDescription
        }
        return service;

        function setprojectNameAndDescription(projectName, ProjectDescription) {
            console.log(projectName + "   " + ProjectDescription); //FYI : Avindu two variables to be saved in the backend
        }

    }

})(angular);