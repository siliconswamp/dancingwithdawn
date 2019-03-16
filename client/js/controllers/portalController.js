angular.module('portal').controller('PortalController', ['$scope', 'Portal', 

  function($scope, Portal) {
	  
	  
	// Login in existing user
    $scope.loginUser = function() {
	 
	$scope.login = function(){
		var currentUser = $scope.userlogin;
		Portal.login(currentUser);
	}
    };
  }
]);
