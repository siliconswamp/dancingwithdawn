angular.module('portal_collections').controller('PortalController', ['$scope', 'Portal',
    function($scope, Portal) {
        var admin_features = Portal.admin_features;
        var logins = Portal.logins;

        $scope.webtext = function () {
            Portal.admin_features().then(function(response) {
                var webtext_json = response.data;
                var homepage_json = webtext_json.filter(a => a.type == "home_summary")[0];
                var aboutme_json = webtext_json.filter(a => a.type == "about_me")[0];
                var trialclass1_json = webtext_json.filter(a => a.type == "trial_class_1")[0];
                var trialclass2_json = webtext_json.filter(a => a.type == "trial_class_2")[0];
                var trialclass3_json = webtext_json.filter(a => a.type == "trial_class_3")[0];
                var testimony_json = webtext_json.filter(a => a.type == "testimony")[0];

                $scope.homepage = {
                    summary: homepage_json.message,
                    header: homepage_json.header,
                    aboutme_header: aboutme_json.header,
                    aboutme_body: aboutme_json.message,
                    trialclass1_header: trialclass1_json.header,
                    trialclass1_header2: trialclass1_json.header2,
                    trialclass1_body: trialclass1_json.message,
                    trialclass2_header: trialclass2_json.header,
                    trialclass2_header2: trialclass2_json.header2,
                    trialclass2_body: trialclass2_json.message,
                    trialclass3_header: trialclass3_json.header,
                    trialclass3_header2: trialclass3_json.header2,
                    trialclass3_body: trialclass3_json.message,
                    testimony_header: testimony_json.header,
                    testimony_header2: testimony_json.header2,
                    testimony_body: testimony_json.message
                }
            }, function(error) {
                console.log('Unable to retrieve listings:', error);
            });

        };

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


