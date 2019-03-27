angular.module('home_collections').controller('HomeController', ['$scope', 'Home',
    function ($scope, Home) {

        Home.web_text().then(function (response) {
            $scope.admin_features = response.data;
        }, function (error) {
            console.log('Unable to retrieve portal details:', error);
        });

        $scope.contact_form = function () {
            $scope.contact = {
                name: "Your name...",
                email: "Your email address...",
                message: "Message..."
            };

            var contactInfo = $scope.contact;
            $scope.send = function () {
                Home.contact_form(contactInfo);
                alert("message sent");
            };
        };
    }
]);
