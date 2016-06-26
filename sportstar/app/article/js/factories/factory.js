var myApp = angular.module('Factories',[]);
/******************************** file upload in article ****************************************/
myApp.factory('fileUpload',['$http', '$window', '$q',  function ($http, $window, $q){
      var data = "";
      var deferred = $q.defer();
      return {
            uploadFileToUrl: function(file, uploadUrl, data){
                  var fd = new FormData();
                  fd.append('file', file);

                  for(var key in data)
                        fd.append(key, data[key]);

                  $http.post(uploadUrl, fd,
                  {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                  }).then(function(response){
                        deferred.resolve(response.data);
                  });
                  return deferred.promise;
            }
      }
}]);
/******************************** file upload in article ****************************************/
/*********************************** Recent list factory ***************************************/
myApp.factory('recent',['$http','$q',function($http,$q) {
      var data = "";
      var deferred = $q.defer();
      $http.post('article/serverside/recent-articles.php').then(function(response){
            deferred.resolve(response.data);
      });
      return deferred.promise;
}]);
/*********************************** Recent list factory ***************************************/