angular.module('faq_collections', []).factory('FAQ', function($http) {
    var collections = {
        faq_text: function(){
            //return $http.get('http://localhost:8080/api/faq/');
            return $http.get('https://dancingwithdawn.herokuapp.com/api/faq/');
        },

        updateFAQData: function(faq_detail){
            return $http.post('https://dancingwithdawn.herokuapp.com/api/faq/'+faq_detail._id, faq_detail);
            //return $http.post('http://localhost:8080/api/faq/'+faq_detail._id, faq_detail)
        },

        addFAQData: function(faq_detail){
            return $http.post('https://dancingwithdawn.herokuapp.com/api/faq/', faq_detail);
            //return $http.post('http://localhost:8080/api/faq/', faq_detail)
        },

        removeFAQ: function (faq_detail) {
            return $http.delete('https://dancingwithdawn.herokuapp.com/api/faq/'+faq_detail._id, faq_detail);
            //return $http.delete('http://localhost:8080/api/faq/'+faq_detail._id, faq_detail)
        }
    };

    return collections;
});
