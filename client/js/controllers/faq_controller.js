angular.module('faq_collections').controller('FAQController', ['$scope', 'FAQ',
    function($scope, FAQ) {

        $scope.faq_text = [];
        FAQ.faq_text().then(function(response) {
            $scope.faq_text = response.data;
        }, function(error) {
            console.log('Unable to retrieve portal details:', error);
        });

        $scope.display = {show:0};
        $scope.add = {show:0};

        $scope.editFAQ = function() {
            $scope.updatedFAQ = {
                _id: undefined,
                order: 0,
                question: "",
                answer: ""
            };

            $scope.selectedFAQ = {
                order: 0,
                question: "",
                answer: ""
            };

            $scope.showDetails = function(selection){
                $scope.updatedFAQ = {
                    _id: selection._id,
                    order: selection.order,
                    question: selection.question,
                    answer: selection.answer
                };

                $scope.selectedFAQ = {
                    _id: selection._id,
                    order: selection.order,
                    question: selection.question,
                    answer: selection.answer
                };
            };

            $scope.changedValue = function(item){
                $scope.updatedFAQ = {
                    _id: $scope.updatedFAQ._id,
                    order: item,
                    question: $scope.updatedFAQ.question,
                    answer: $scope.updatedFAQ.answer
                };
            };

            $scope.deleteFAQ = function(entry) {
                for(var i = parseInt(entry.order); i < $scope.faq_text.length; i++)
                {
                    $scope.faq_text[i].order = (i - 1);
                    FAQ.updateFAQData($scope.faq_text[i]);
                }

                alert("Deleting " + entry.question);
                FAQ.removeFAQ(entry);
                $scope.faq_text.splice($scope.faq_text.indexOf(entry),1);

                $scope.display = {show:0};
                $scope.add = {show:0};
            };

            $scope.updateFAQ = function() {
                if($scope.updatedFAQ.order < $scope.selectedFAQ.order)
                {
                    for(var i = $scope.updatedFAQ.order; i < $scope.selectedFAQ.order; i++)
                    {
                        $scope.faq_text[i - 1].order = (parseInt(i) + 1);
                        FAQ.updateFAQData($scope.faq_text[i - 1]);
                    }
                }
                else {
                    if ($scope.updatedFAQ.order > $scope.selectedFAQ.order) {
                        for (var i = $scope.selectedFAQ.order; i > $scope.updatedFAQ.order; i--) {
                            $scope.faq_text[i - 1].order = (parseInt(i) - 1);
                            FAQ.updateFAQData($scope.faq_text[i - 1]);
                        }
                    }
                }

                FAQ.updateFAQData($scope.updatedFAQ);
                alert("updated");
                location.reload();
                $scope.faq_text.sort();
                $scope.display = {show:0};
                $scope.add = {show:0};
            };
        };

        $scope.addFAQ = function() {

            $scope.newFAQ = {
                order: 0,
                question: "",
                answer: ""
            };

            $scope.sendNewFAQ = function() {
                $scope.newFAQ.order = $scope.faq_text.length;
                FAQ.addFAQData($scope.newFAQ);
                $scope.faq_text.push($scope.newFAQ);
                $scope.faq_text.sort();
                alert("added");
                $scope.display = {show:0};
                $scope.add = {show:0};

                $scope.newFAQ = {
                    order: 0,
                    question: "",
                    answer: ""
                };
            };
        };
    }
]);


