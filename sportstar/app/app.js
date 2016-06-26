'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'pagination',
  'Articles',
  'Factories',
  'Registration',
  'login',
  'ngTable'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');
  $routeProvider
  	.when('/list-article/', {
    	templateUrl: 'article/views/list-articles.html',
    	controller: 'listArticle'
  })
  	.when('/add-article', {
    	templateUrl: 'article/views/add-article.html',
    	controller: 'createArticle'
  })
    .when('/edit-article/:id', {
      templateUrl: 'article/views/edit-article.html',
      controller: 'editArticle'
  })
    .when('/view-article/:id', {
      templateUrl: 'article/views/view_article.html',
      controller: 'viewArticle'
  })
    .when('/login', {
      templateUrl: 'login/views/login.html',
      controller: 'login',
  })
    .when('/registration', {
      templateUrl: 'login/views/registration.html',
      controller: 'addUser'
  })
    .when('/recent-articles', {
      templateUrl: 'article/views/recent_articles.html',
      controller: 'recentArticles'
  })
    .when('/admin-comments/:id', {
      templateUrl: 'article/views/admin-comments.html',
      controller: 'approve'
  })
    .when('/logout', {
      controller: 'logout'
  })
	.otherwise({redirectTo: '/recent-articles'});
}])
.directive("footer", function() {
    return {
        restrict : "E",
        template : "<div class='footer'><div class='footerContent'>Copy rights Sportstar Team@2016</div></div>"
    };
})
.run(function($rootScope, $location, $window, $cookieStore, $timeout){
    $rootScope.$on( "$routeChangeStart", function(event, next, current, cookieStore) {
        //if(!$rootScope.isAuthenticated)
        $rootScope.successmsg = $cookieStore.get('successmsg');
        $rootScope.failuremsg = $cookieStore.get('failuremsg');
        
        var authenticationProcess = function(){
          $rootScope.username = $cookieStore.get('username');
          $rootScope.role = $cookieStore.get('role');
          $rootScope.isAuthenticated = true;
          $rootScope.isAdmin = ($rootScope.role == "1")?true:false;
          $rootScope.isAuthor = ($rootScope.role == "2")?true:false;
        };

        if(next.controller == 'logout')
        {
          $cookieStore.remove('username');
          $cookieStore.remove('role');
          $cookieStore.remove('userId');

          $rootScope.username = '';
          $rootScope.role = '';
          $rootScope.isAuthenticated = false;
          $rootScope.isAdmin = false;
          $rootScope.isAuthor = false;
          $location.path("/recent-articles");
        }
        else
        {
          if($cookieStore.get('username') == '' || $cookieStore.get('username') == 'undefined' || !($cookieStore.get('username')))//Not authenticated
          {
              if(next.templateUrl == 'article/views/recent_articles.html' || next.templateUrl == 'login/views/registration.html' || next.templateUrl == 'login/views/login.html' || next.templateUrl == 'article/views/view_article.html')//Common page for all.
              {
              }
              else
              {
                  $location.path("/login");//If not a common page, you have to be authenticated.
              }
          }
          else
          {
              authenticationProcess();
              if(next.templateUrl == '' && next.controller == 'logout')
              {

              }
              else if(next.templateUrl == 'login/views/login.html')
              {
                $location.path("/recent-articles");//No need for login page while you logged in so redirect to list page.
              }
              if($rootScope.role != 1 && next.templateUrl == 'article/views/admin-comments.html')
              {
                $location.path("/recent-articles");//This page must be accessed only by admin. A flash message needed must.
              }
          }
        }
    });
});