define(['bootstrap'],function(app){
  var filterController = ['$scope',function($scope){
    $scope.filterCriteria = ["Latest","ETF","Stocks","Funds"];
  }];
  app.$controllerProvider.register("filterController",filterController);
});
