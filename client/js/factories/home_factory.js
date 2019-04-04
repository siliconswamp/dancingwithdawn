angular.module('home_collections', []).factory('Home', function($http) {
    var collections = {
        web_text: function(){
            //return $http.get('http://localhost:8080/api/admin_features');
            return $http.get('https://dancingwithdawn.herokuapp.com/api/admin_features');
        },
        contact_form: function(contact_info) {
            //return $http.post('http://localhost:8080/api/contact_form', contact_info);
            return $http.get('https://dancingwithdawn.herokuapp.com/api/contact_form', contact_info);
        },
        update_text: function(new_admin_text){
            return $http.get('https://dancingwithdawn.herokuapp.com/api/admin_features/'+new_admin_text._id, new_admin_text);
        }
    };
    return collections;
});
