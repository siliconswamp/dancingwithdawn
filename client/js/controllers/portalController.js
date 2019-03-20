angular.module('portal_collections').controller('PortalController', ['$scope', 'Portal',
    function($scope, Portal) {
        var admin_features = Portal.admin_features;
        var logins = Portal.logins;


        $scope.webtext = function () {
            Portal.admin_features().then(function(response) {
                var webtext_json = response.data;

                $scope.homepage = {
                    summary: webtext_json.filter(a => a.type == "home_summary")[0].message
                }
            }, function(error) {
                console.log('Unable to retrieve listings:', error);
            });

        };

        $scope.loginUser = function() {

            $scope.loginInfo = {
                email: "yourname@email.com",
                password: "u$3stRongP@ssWo12d!"
            }
        };

        $scope.newUser = function() {};
    }
]);


