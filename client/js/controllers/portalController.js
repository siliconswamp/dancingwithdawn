angular.module('portal_collections').controller('PortalController', ['$scope', 'Portal',
    function($scope, Portal) {

        Portal.web_text().then(function(response) {
            $scope.admin_features = response.data;
        }, function(error) {
            console.log('Unable to retrieve portal details:', error);
        });

        Portal.faq_text().then(function(response) {
            $scope.faq_text = response.data;
        }, function(error) {
            console.log('Unable to retrieve portal details:', error);
        });

        $scope.contact_form = function() {
            $scope.contact = {
                name:"Your name...",
                email:"Your email address...",
                message:"Message..."
            };

            var contactinfo = $scope.contact;
            $scope.send = function(){
               Portal.contact_form(contactinfo);
            };
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


