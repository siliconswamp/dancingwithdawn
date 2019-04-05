angular.module('home_collections').controller('HomeController', ['$scope', 'Home',
    function ($scope, Home) {

        $scope.admin_features = {};

        Home.web_text().then(function (response) {
            $scope.admin_features = response.data;
        }, function (error) {
            console.log('Unable to retrieve portal details:', error);
        });

        $scope.display = {show:0};

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

        $scope.edit_admin_features = function(){

            $scope.updated_text = {
                _id: undefined,
                type: "",
                header: "",
                header2: "",
                message: "",
            };

            $scope.showDetails = function(selection){
                $scope.current_text = {
                    _id: selection._id,
                    type: selection.type,
                    header: selection.header,
                    header2: selection.header2,
                    message: selection.message,
                };

                $scope.updated_text = {
                    _id: selection._id,
                    type: selection.type,
                    header: selection.header,
                    header2: selection.header2,
                    message: selection.message,
                };
            };

            $scope.update_text = function() {
                Home.update_text($scope.updated_text);
                alert("updated");
                $scope.admin_features.sort();
                $scope.display = {show:0};
            };
        };
    }
]);
