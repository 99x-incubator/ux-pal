(function () {
    'use strict';

    angular.
    module('ux.getStart').
    controller('getStartCtrl', getStartCtrl);

    getStartCtrl.$inject = ['getStartService', '$scope'];

    function getStartCtrl(getStartService, $scope) {
        $scope.projectName;
        $scope.projectDescription;

        $scope.createNewProject = function() {
            getStartService.setprojectDetails($scope.projectName, $scope.projectDescription);
        }

    }
})();