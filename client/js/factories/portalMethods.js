angular.module('portal_collections', []).factory('Portal', function($http) {
    var collections = {
        web_text: function(){
            //return $http.get('http://localhost:8080/api/admin_features');
            return $http.get('https://dancingwithdawn.herokuapp.com/api/admin_features');
        },
        faq_text: function(){
            //return $http.get('http://localhost:8080/api/faq_text/1');
            return $http.get('https://dancingwithdawn.herokuapp.com/api/faq_text');
        },
        contact_form: function(contact_info) {
            //return $http.post('http://localhost:8080/api/contact_form', contact_info);
            return $http.get('https://dancingwithdawn.herokuapp.com/api/contact_form', contact_info);
        },

        logins: function(email, password){
        }
    };

    return collections;
});
