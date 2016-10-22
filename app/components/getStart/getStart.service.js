(function () {
    'use strict';

    angular.module('ux.getStart').factory('getStartService', getStartService);
    getStartService.$inject = ['$http'];

    function getStartService($http) {
        var service = {
            setprojectDetails: setprojectNameAndDescription
        }
        return service;

        function setprojectNameAndDescription(projectName, ProjectDescription) {
            var req = {
                method: 'POST',
                url: 'http://localhost:3000/createProject',
                headers: {
                    'Content-Type': "application/json"
                },
                data: {
                    projectName: projectName,
                    ProjectDescription: ProjectDescription,
                    username: 'demoUX'
                }
            }
            var result = $http(req);
            console.log(result);
            console.log(projectName + "   " + ProjectDescription); //FYI : Avindu two variables to be saved in the backend
        }

    }

})(angular);