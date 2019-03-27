angular.module('portal_collections').controller('PortalController', ['$scope', 'Portal',
    function($scope, Portal) {


        $scope.loginUser = function() {
            $scope.loginInfo = {
                email: "yourname@email.com",
                password: "u$3stRongP@ssWo12d!"
            }
        };

        $scope.newUser = function() {};
    }
]);


