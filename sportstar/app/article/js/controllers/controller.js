var myApp = angular.module('Articles',['ngTable']);
image_path = '/angular-proj/angularjs/aravind-proj/sportstar/app/assets/images/';
global_load = 1;
/************************ Article list ***********************************/
myApp.controller('listArticle', ['$scope','$filter','ngTableParams','nameService', '$rootScope', '$location', '$timeout',
      function($scope, $filter, ngTableParams, nameService, $rootScope, $location, $timeout)
      {
            $scope.article = {};
            $scope.article.edit = '-';
            $scope.article.approve = '-';
            $scope.reload = false;
            $scope.showAlert = true;

            var data = nameService.data;

            var showAlert = function() {
                  var reload = function(){
                        $scope.tableParams.reload();
                  }

                  $scope.showAlert = true;
            }
            var hideAlert = function() {
                  $rootScope.successmsg = [];
                  $scope.showAlert = false;
            }

            var displayAlertMessages = function(){
                  if($rootScope.successmsg){
                        $timeout(showAlert, 2000);
                        $scope.showAlert = false;
                        $timeout(hideAlert, 5000);
                  }
            }
            displayAlertMessages();

            $scope.tableParams = new ngTableParams(
            {
                  page: 1,// show first page
                  count: 5,// count per page
                  sorting: {name:'asc'},
                  //pageSize: 12
                  filter: function(){ title: "" }
            },
            {
                  total: 0, // length of data
                  getData: function($defer, params)
                  {
                        nameService.getData($defer,params,$scope.filter);
                  },
                  counts: [],
                  paginationMaxBlocks: 13
            });

            var filterData = function (){
                  $scope.tableParams.reload();
            };

            //$scope.$watch("filter.$", filterData);


}]);
/************************ Article list ***********************************/

/************************ Article Insert *********************************/
myApp.controller('createArticle', ['$scope', 'fileUpload', '$rootScope', '$location', '$cookieStore', function($scope, fileUpload, $rootScope, $location, $cookieStore){
      $scope.article = {};
      $scope.pattern = "/^ \w+( +\w+)*$";
      $scope.statusList = statusList;
      $scope.categories = categories;
      $scope.alert = '';
      $scope.image_name = {};

      $scope.uploadFile = function(){
            var file = $scope.myFile;
            var uploadUrl = "article/serverside/add-article.php";
            $scope.article.author_id = $cookieStore.get('userId');
            $scope.getFile = function () {
                  fileReader.readAsDataUrl($scope.file, $scope)
                            .then(function(result) {
                                $scope.image_name = result;
                            });
            };
            fileUpload.uploadFileToUrl(file, uploadUrl, $scope.article).then(function(data){
                  if(data == 'Success')
                        $location.path("/list-article")
                  else
                        $scope.alert = $scope.alert+'There is a problem while inserting your data'+'<br />';
            });
            
      };

}]);
/************************ Article Insert *********************************/
/************************ Article Edit ***********************************/

myApp.controller('editArticle', ['$scope', '$http','$routeParams', 'fileUpload', '$rootScope', '$location', '$window', '$cookieStore', '$route' ,
      function($scope, $http, $routeParams, fileUpload, $rootScope, $location, $window, $cookieStore, $route){
      $scope.article = {};
      $scope.statusList = statusList;
      $scope.categories = categories;
      $scope.article.imageExist = false;
      $scope.article.norecord = false;
      $scope.alert = '';

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
            
            fileUpload.uploadFileToUrl(file, uploadUrl, $scope.article).then(function(data){
                  if(data == 'Success')
                  {
                        var msg = [];
                        msg.push ('Your record has been updated successfully');
                        $cookieStore.put('successmsg', msg);
                        //$location.path("/list-article");
                        //$window.location.href = "/angular-proj/angularjs/aravind-proj/sportstar/app/#/list-article";
                        window.location.href = "/angular-proj/angularjs/aravind-proj/sportstar/app/#/list-article";
                  }
                  else
                        $scope.alert = 'There is a problem while updating your data';
            });
      };
}]);
/************************ Article Edit ***********************************/

/************************ Approve / Reject ***********************************/
myApp.controller('approve', ['$scope', '$http','$routeParams', 'fileUpload','$rootScope', '$location', function($scope,$http, $routeParams, fileUpload, $rootScope, $location){
	$scope.article = {};
	$scope.statusList = statusList;
	$scope.categories = categories;

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
            var uploadUrl = "article/serverside/admin_comments.php";
            fileUpload.uploadFileToUrl(file, uploadUrl, $scope.article).then(function(data){
                  if(data == 'Success')
                        $location.path("/list-article");
                  else
                        $scope.alert = 'There is a problem while updating your data';
            });
      };
}]);
/************************ Approve / Reject ***********************************/
/************************ Recent Articles ***********************************/
myApp.controller('recentArticles', ['$scope','recent',function($scope,recent) {
      recent.then(function(data){
            $scope.currentPage = 1;
            $scope.pageSize = 9;
            $scope.article = {};

            var perpage = 5;
            var count;
            var length = data.length;
            if(length >= perpage){
                  count = length;
            } else {
                  count = perpage;
            }
            var content = [];
            var title = [];
            for(i=0;i<count; i++){
                  for(j=0;j<categories.length;j++){
                        if(categories[j]['id'] == data[i].category)
                              data[i].category = categories[j]['title'];
                  }

            content.push(data[i].content);
            title.push(data[i].title);
            }
            $scope.article = data;
            $scope.content = content;
            

      });
}]);

/************************ Recent Articles ***********************************/

/************************ View Article ***********************************************************/

myApp.controller('viewArticle', ['$scope', '$http','$routeParams', 'fileUpload', '$rootScope', '$location', function($scope,$http, $routeParams, fileUpload, $rootScope, $location){
      $scope.article = {};
      $scope.statusList = statusList;
      $scope.categories = categories;

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
                  var i=0;
                  for(i=0;i<statusList.length;i++){
                        if(statusList[i]['id'] == $scope.article.status)
                              $scope.article.status = statusList[i]['title'];
                  }

                  for(i=0;i<categories.length;i++){
                        if(categories[i]['id'] == $scope.article.category)
                              $scope.article.category = categories[i]['title'];
                  }

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