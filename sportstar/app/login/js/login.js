var myApp = angular.module('login', ['ngCookies']);

myApp.controller('login', ['$scope','$rootScope', '$location', '$window', 'authenticate', '$http', '$cookieStore',
function($scope, $rootScope, $location, $window, authenticate, $http, $cookieStore) {
	$scope.alert = '';
	$scope.login = function(){
		authenticate.login($scope.login.username, $scope.login.password).then(function(response){

			if(response === 'error' ){
				$scope.alert = $scope.alert+"There is an error while authenticate your login";
			} else if(response){
				$cookieStore.put('username',response.user_name);
				$cookieStore.put('role', response.role);
				$cookieStore.put('userId', response.id);
				$cookieStore.put('successmsg', '');
				$cookieStore.put('failuremsg', '');

				$rootScope.username = $cookieStore.get('username');
				$rootScope.role = $cookieStore.get('role');
				$rootScope.isAuthenticated = true;
				$rootScope.isAdmin = ($rootScope.role == "1")?true:false;
				$rootScope.isAuthor = ($rootScope.role == "2")?true:false;
				$scope.alert = 'Success! you have logged in successfully';
				$location.path("/recent-articles");
			} else {
				$scope.alert = 'Username or password is invalid';
			}
		});
	}
}]);

/*myApp.service("authenticate", function($http, $filter, $cookieStore, $rootScope, $window){
	this.login = function(userName, password){
		$rootScope.username = $cookieStore.username;
		$rootScope.role = $cookieStore.role;
		$rootScope.isAuthenticated = true;

		$http.post('user/serverside/authentication.php',{username: userName, password: password})
		.then(function(response){
			if(response.data){
				$cookieStore.put('username',userName);
				$cookieStore.put('role', response.data.role);
				$cookieStore.put('userId', response.data.id);
				$cookieStore.isAuth = true;

				$rootScope.username = $cookieStore.get('username');
				$rootScope.role = $cookieStore.get('role');
				$rootScope.isAuthenticated = true;
				$rootScope.isAdmin = ($rootScope.role == "1")?true:false;
				$rootScope.isAuthor = ($rootScope.role == "2")?true:false;
				$window.location.href = '#!/recent-articles';
			}
		});
	}
	this.logout = function(){
	};
});*/

myApp.factory('authenticate',['$http', '$filter', '$cookieStore', '$rootScope', '$window', '$q',
	function($http, $filter, $cookieStore, $rootScope, $window, $q) {
		var data = "";
		
		return {
			login: function(userName,password){
				var deferred = $q.defer();
				$http.post('user/serverside/authentication.php',{username: userName, password: password})
				.then(function(response){
				    deferred.resolve(response.data);
				});
				return deferred.promise;
			}
		}
}]);

myApp.controller('logout', ['authenticate', function(authenticate) {
}]);