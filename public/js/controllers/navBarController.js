var navbarController = app.controller("navbarController",['$scope','$uibModal',function($scope,$modal){
  $scope.search = function(){
    console.log("You clicked search");
    console.log($modal);
    $modal.open({
      template:"<h3>test</h3>"

    })
  }
}]);
