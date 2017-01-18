define(['bootstrap'],function(app){
  var articleService = app.$provide.service('articleService',['$http','$q',function($http,$q){
    this.getArticles = function(){
      var articles = [];
      var deferred = $q.defer();
      $http.get(app.endpoint).then(function(result) {
          if (result.status == 200) {
              articles = result.data.payload;
              deferred.resolve(articles);
          }
      });
      return deferred.promise;
    }

    this.getArticle = function(id){
      var articles = [];
      var deferred = $q.defer();
      $http.get(app.endpoint+id).then(function(result) {
          if (result.status == 200) {
              deferred.resolve(result);
          }
      });
      return deferred.promise;
    }
  }]);

});
