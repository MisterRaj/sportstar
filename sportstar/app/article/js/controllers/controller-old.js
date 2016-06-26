var myApp = angular.module('Articles', ['ngTable']);
image_path = '/angular-proj/angularjs/aravind-proj/sportstar/app/assets/images/';
/************************ Article list ***********************************/
myApp.controller('listArticle', ['$scope','$filter','ngTableParams','nameService', '$rootScope', '$location', 
      function($scope, $filter, ngTableParams, nameService, $rootScope, $location)
      {
            //$scope.article.edit = '-';
            var data = nameService.data;

            $scope.tableParams = new ngTableParams(
            {
                  page: 1,// show first page
                  count: 5,// count per page
                  sorting: {name:'asc'}
            },
            {
                  total: 0, // length of data
                  getData: function($defer, params)
                  {
                        nameService.getData($defer,params,$scope.filter);
                  },
                  counts: [],
                  paginationMaxBlocks: 13,

            });

            $scope.$watch("filter.$", function ()
            {
                  $scope.tableParams.reload();
            });

}]);
/************************ Article list ***********************************/

/************************ Article Insert *********************************/
myApp.controller('createArticle', ['$scope', 'fileUpload', '$rootScope', '$location', '$cookieStore', function($scope, fileUpload, $rootScope, $location, $cookieStore){
      $scope.article = {};
      $scope.pattern = "/^ \w+( +\w+)*$";
      $scope.statusList = [{title: 'New', id: 1, role: "Author"},{title: 'Sent To Review', id: 2, role: "Author"}, {title: 'Approved', id: 3, role: "Admin"},{title: 'Rejected', id: 4, role: "Admin"}];
      $scope.categories = [{title: 'Cricket',id: 1},{title: 'Football',id: 2 },{title: 'Tennis',id: 3},{title: 'Golf',id: 4,}];
      $scope.errorList = {};
      $scope.image_name = {};

      $scope.uploadFile = function(){
            var file = $scope.myFile;
            var uploadUrl = "article/serverside/add-article.php";
            $scope.article.author_id = $cookieStore.get('userId');
            var insert = fileUpload.uploadFileToUrl(file, uploadUrl, $scope.article);
            alert(insert);
            console.log(insert);
            if(insert == 'success')
                  $window.location.href = '#!/list-article';
            else
                  $scope.errorList.errorMsg = 'There is a problem while inserting your data';
      };

}]);
/************************ Article Insert *********************************/
/************************ Article Edit ***********************************/

myApp.controller('editArticle', ['$scope', '$http','$routeParams', 'fileUpload', '$rootScope', '$location', function($scope,$http, $routeParams, fileUpload, $rootScope, $location){
      $scope.article = {};
      $scope.statusList = [{title: 'New', id: 1, role: "Author"},{title: 'Sent To Review', id: 2, role: "Author"}, {title: 'Approved', id: 3, role: "Admin"},{title: 'Rejected', id: 4, role: "Admin"}];
      $scope.categories = [{title: 'Cricket',id: 1},{title: 'Football',id: 2 },{title: 'Tennis',id: 3},{title: 'Golf',id: 4,}];
      $scope.article.imageExist = false;
      $scope.article.norecord = false;

      var id = $routeParams.id;

      $http.post('article/serverside/get-article.php',{id: id})
      .then(function(response){
            if(response.data.length)
            {
                  $scope.article = response.data[0];
                  $scope.article.status = parseInt(response.data[0].status);
                  $scope.article.category = parseInt(response.data[0].category);
                  $scope.article.id = parseInt(response.data[0].id);
                  if($scope.article.image!='')
                  {
                        $scope.article.image = image_path+response.data[0].image;
                        $scope.article.imageExist = true;
                  }
            }
            else
            {
                  $scope.article.norecord = true;
            }
      });
      $scope.updateData = function(){
            var file = $scope.myFile;
            var uploadUrl = "article/serverside/update-article.php";
            fileUpload.uploadFileToUrl(file, uploadUrl, $scope.article);
      };
}]);
/************************ Article Edit ***********************************/

/************************ Approve / Reject ***********************************/
myApp.controller('approve', ['$scope', '$http','$routeParams', 'fileUpload','$rootScope', '$location', function($scope,$http, $routeParams, fileUpload, $rootScope, $location){
			$scope.article = {};
			$scope.statusList = [{title: 'New', id: 1, role: "Author"},{title: 'Sent To Review', id: 2, role: "Author"}, {title: 'Approved', id: 3, role: "Admin"},{title: 'Rejected', id: 4, role: "Admin"}];
			$scope.categories = [{title: 'Cricket',id: 1},{title: 'Football',id: 2 },{title: 'Tennis',id: 3},{title: 'Golf',id: 4,}];

      var id = $routeParams.id;
      $http.post('article/serverside/get-article.php',{id: id})
      .then(function(response){
            $scope.article = response.data[0];
            $scope.article.status = parseInt(response.data[0].status);
            $scope.article.category = parseInt(response.data[0].category);
            $scope.article.id = parseInt(response.data[0].id);
      });

      $scope.updateData = function(){
            var file = '';
            var uploadUrl = "article/serverside/admin-comments.php";
            fileUpload.uploadFileToUrl(file, uploadUrl, $scope.article);
      };
}]);
/************************ Approve / Reject ***********************************/
/************************ Recent Articles ***********************************/
myApp.controller('recentArticles', ['$scope','$filter','ngTableParams','rnameService', '$rootScope', '$location', 
function($scope, $filter, ngTableParams, rnameService, $rootScope, $location) {
var data = rnameService.data;

      $scope.tableParams = new ngTableParams(
      {
            page: 1,// show first page
            count: 5,// count per page
            sorting: {name:'asc'},
            total: 100
      },
      {
            total: 0, // length of data
            getData: function($defer, params)
            {
                  rnameService.getData($defer,params,$scope.filter);
            },
            counts: [],
            paginationMaxBlocks: 13,
      });

      $scope.$watch("filter.$", function ()
      {
            $scope.tableParams.reload();
      });

}]);
/************************ Recent Articles ***********************************/

/************************ View Article ***********************************************************/

myApp.controller('viewArticle', ['$scope', '$http','$routeParams', 'fileUpload', '$rootScope', '$location', function($scope,$http, $routeParams, fileUpload, $rootScope, $location){
      $scope.article = {};
      $scope.statusList = [{title: 'New', id: 1, role: "Author"},{title: 'Sent To Review', id: 2, role: "Author"}, {title: 'Approved', id: 3, role: "Admin"},{title: 'Rejected', id: 4, role: "Admin"}];
      $scope.categories = [{title: 'Cricket',id: 1},{title: 'Football',id: 2 },{title: 'Tennis',id: 3},{title: 'Golf',id: 4,}];
      $scope.article.imageExist = false;
      $scope.article.norecord = false;

      var id = $routeParams.id;

      $http.post('article/serverside/get-article.php',{id: id})
      .then(function(response){
            alert("ERROR");
            if(response.data.length)
            {
                  $scope.article = response.data[0];
                  $scope.article.status = parseInt(response.data[0].status);
                  $scope.article.category = parseInt(response.data[0].category);
                  $scope.article.id = parseInt(response.data[0].id);
                  if($scope.article.image!='')
                  {
                        $scope.article.image = image_path+response.data[0].image;
                        $scope.article.imageExist = true;
                  }
            }
            else
            {
                  $scope.article.norecord = true;
            }
      });
}]);

/************************ View Article ***********************************************************/
