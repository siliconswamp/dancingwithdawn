angular.module('home_collections').controller('HomeController', ['$scope', 'Home',
    function ($scope, Home) {

        $scope.admin_features = {};
        $scope.calendar_events = {};
        $scope.filtered_events = [];

        Home.web_text().then(function (response) {
            $scope.admin_features = response.data;
        }, function (error) {
            console.log('Unable to retrieve portal details:', error);
        });

        Home.get_events().then(function (response){
            $scope.calendar_events = response.data.items;
            var c_events = $scope.calendar_events;
            for(x in c_events)
            {
                var event_date = new Date(c_events[x].start.dateTime);
                var current_date = new Date();

                if(event_date > current_date) {
                    $scope.filtered_events.push(c_events[x]);
                }
            }
        }, function (error) {
            console.log('Unable to retrieve calendar events:', error);
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
                $scope.contact = {
                    name: "Your name...",
                    email: "Your email address...",
                    message: "Message..."
                };
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
                location.reload();
                $scope.admin_features.sort();
                $scope.display = {show:0};
            };
        };

        $scope.parent_info = function(){
           $scope.update_parent = function (parent) {
                alert(1);
           };
        };
    }
]);
