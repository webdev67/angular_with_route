// unused code really - i was trying to implement a modal then i realized that the search feature was a page and not a modal

define(['bootstrap'],function(app){
  var navbarController = ['$scope','$uibModal',function($scope,$modal){
    $scope.search = function(){
      $modal.open({
        template:"<h3>test</h3>"

      })
    }
  }];
  app.$controllerProvider.register("navbarController",navbarController);
});
