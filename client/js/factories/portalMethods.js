angular.module('portal_collections', []).factory('Portal', function($http) {
    var collections = {
        admin_features: function(){
            return $http.get('http://localhost:8080/api/admin_features');
        },

        logins: function(email, password){
            return $http.get('http://localhost:8080/api/logins', email, password);
        }
    };

    return collections;
});
