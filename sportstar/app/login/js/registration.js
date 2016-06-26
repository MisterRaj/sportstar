var myApp = angular.module('Registration',['ngRoute']);
/************************ Add User ***********************************/
myApp.controller('addUser', ['$scope','$http', '$location', function($scope, $http, $location){
    $scope.registration = {};
    $scope.errorList = {};
    $scope.validate = function(){
      var reg = $scope.registration;
      console.log($scope.registration);
      if(reg.password == reg.cpassword){
        $http.post("user/serverside/add-user.php",reg)
        .then(function(resp)
        {
            if(resp.data == "Failed")
            {
              $scope.errorList.errorMsg = 'There is a problem while inserting your data';
            }
            else
            {
              $location.path("/login");
            }
        });
      } else {

      }
      /*if($scope.registration.password !== $scope.registration.cpassword){
        $scope.errorList = {password: "Passwords are not matching"};
      }*/
      console.log("Password"+$scope.registration.password);
      console.log("Confirm Password"+$scope.registration.cpassword);
    };

}]);
/************************ Add User *********************************/