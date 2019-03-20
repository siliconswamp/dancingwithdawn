angular.module('portal_collections', []).factory('Portal', function($http) {
    var collections = {
        admin_features: function(){
            return $http.get('https://dancingwithdawn.herokuapp.com/api/admin_features');
        },

        logins: function(email, password){

        }
    };

    return collections;
});
