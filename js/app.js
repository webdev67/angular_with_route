var app = angular.module('app',['ui.router']);

app.config(['$stateProvider',function($stateProvider){
  var states = {
    url:'/home',
    controller:"aritclesController",
    name:"test",
    templateUrl:"/templates/home.html"
  };
  $stateProvider.state(states);
}]);
console.log(app);
console.log("here");
