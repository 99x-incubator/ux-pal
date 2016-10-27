(function () {
    'use strict';

    angular.
    module('ux.getStart').
    controller('getStartCtrl', getStartCtrl);

    getStartCtrl.$inject = ['getStartService', '$scope', 'toastr', '$state', 'localStorageService'];

    function getStartCtrl(getStartService, $scope, toastr, $state, localStorageService) {
        $scope.projectName;
        $scope.projectDescription;

        $scope.createNewProject = function() {
            var serverSuccessData = getStartService.setprojectDetails($scope.projectName, $scope.projectDescription);
            serverSuccessData.then(function(response) {
                console.log(response);
                toastr.success("Project created succesfully");
                localStorageService.setprojectDetails(response);
                $state.go('dashboard');
            }).catch(function(error) {
                console.log(error);
                toastr.error("Couldn't create a project succesfully. Try again later!");
            })
        }

    }
})();