/**************************************** Article list *********************************************/
myApp.service("nameService",['$http','$filter','$cookieStore', '$rootScope', function($http, $filter, $cookieStore, $rootScope){

      function filterData(data, filter)
      {
            return $filter('filter')(data, filter)
      }

      function orderData(data, params)
      {
            return params.sorting() ? $filter('orderBy')(data, params.orderBy()) : filteredData;
      }

      function sliceData(data, params)
      {
            return data.slice((params.page() - 1) * params.count(), params.page() * params.count())
      }

      function transformData(data,filter,params)
      {
            return sliceData( orderData( filterData(data,filter), params ), params);
      }

      var service =
      {
            cachedData:[],
            getData:function($defer, params, filter)
            {
                  if(service.cachedData.length>0)
                  {
                        var filteredData = filterData(service.cachedData,filter);
                        transformedData = sliceData(orderData(filteredData,params),params);
                        params.total(filteredData.length);
                        $defer.resolve(transformedData);
                  }
                  else
                  {
                        var id = $cookieStore.get('userId');
                        if($rootScope.role == 1)
                        {
                              var url = "article/serverside/fetch-author-list.php";
                              var data = "";
                        }
                        else
                        {
                              var url = "article/serverside/fetch-list.php";
                              var data = {id:id};
                        }

                        $http.post(url,data)
                        .success(function(resp)
                        {
                              var i=0;
                              for(i=0; i<resp.length; i++)
                              {
                                    resp[i].status = parseInt(resp[i].status);
                                    resp[i].category = parseInt(resp[i].category);

                                    if($rootScope.role > 1)
                                          resp[i].edit = (resp[i].status == 1)?"Edit":"";
                                    else{
                                          resp[i].approve = (resp[i].status == "2")?"Approve/Reject":"";
                                    }
                                    
                                    var j=0;
                                    var k=0;
                                    for(j=0;j<statusList.length;j++){
                                          if(statusList[j]['id'] == resp[i].status)
                                                resp[i].status = statusList[j]['title'];
                                    }

                                    for(k=0;k<categories.length;k++){
                                          if(categories[k]['id'] == resp[i].category)
                                                resp[i].category = categories[k]['title'];
                                    }
                              }
                              angular.copy(resp,service.cachedData);
                              params.total(resp.length);
                              var filteredData = $filter('filter')(resp, filter);
                              transformedData = transformData(resp,filter,params);
                              $defer.resolve(transformedData);
                        });
                  }
            }
      };
      return service;
}]);
/**************************************** Article list *********************************************/
/**************************************** Article Insert *********************************************/
/*myApp.service('fileUpload', ['$http', '$window', function ($http, $window){
      this.uploadFileToUrl = function(file, uploadUrl, data)
      {
            var fd = new FormData();
            fd.append('file', file);
            for(var key in data)
                  fd.append(key, data[key]);

            console.log(fd);
            $http.post(uploadUrl, fd,
            {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
            })
            .then(function(response){
                  if(response.data == 'Success')
                  {
                        return 'Success';
                  }
                  else
                  {
                        return 'error';
                  }

            });
      }
}]);*/



/**************************************** Article Insert *********************************************/
/**************************************** Recent Articles *********************************************/
myApp.service("rnameService", function($http, $filter){

      function filterData(data, filter)
      {
            return $filter('filter')(data, filter)
      }

      function orderData(data, params)
      {
            return params.sorting() ? $filter('orderBy')(data, params.orderBy()) : filteredData;
      }

      function sliceData(data, params)
      {
            return data.slice((params.page() - 1) * params.count(), params.page() * params.count())
      }

      function transformData(data,filter,params)
      {
            return sliceData( orderData( filterData(data,filter), params ), params);
      }

      var service =
      {
            cachedData:[],
            getData:function($defer, params, filter)
            {
                  if(service.cachedData.length>0)
                  {
                        var filteredData = filterData(service.cachedData,filter);
                        transformedData = sliceData(orderData(filteredData,params),params);
                        params.total(filteredData.length);
                        $defer.resolve(transformedData);
                  }
                  else
                  {
                        $http.get("article/serverside/recent-articles.php")
                        .success(function(resp)
                        {
                              var i=0;
                              for(i=0; i<resp.length; i++)
                              {
                                    resp[i].status = parseInt(resp[i].status);
                                    resp[i].category = parseInt(resp[i].category);
                                    var j=0;
                                    var k=0;
                                    for(j=0;j<statusList.length;j++){
                                          if(statusList[j]['id'] == resp[i].status)
                                                resp[i].status = statusList[j]['title'];
                                    }

                                    for(k=0;k<categories.length;k++){
                                          if(categories[k]['id'] == resp[i].category)
                                                resp[i].category = categories[k]['title'];
                                    }
                              }
                              angular.copy(resp,service.cachedData);
                              params.total(resp.length);
                              var filteredData = $filter('filter')(resp, filter);
                              transformedData = transformData(resp,filter,params);
                              $defer.resolve(transformedData);
                        });
                  }
            }
      };
      return service;
});
/**************************************** Recent Articles *********************************************/
