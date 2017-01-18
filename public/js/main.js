requirejs.config({
  paths:{
    "articlesController":"../js/controllers/articlesController",
    "test":"controllers/test",
    "angular":"../scripts/angular/angular",
    "angularUiRouter":"../scripts/angular-ui-router/release/angular-ui-router",
    "bootstrap":"../bootstrap",
    "uiBootstrap":"../scripts/angular-ui-bootstrap/dist/ui-bootstrap",
    "articleService":"../js/services/articleService",
    "navbarController":"../js/controllers/navBarController",
    "highlighterFilter":"../js/filters/highlighterFilter",
    "searchController":"../js/controllers/searchController",
    "filterController":"../js/controllers/filterController"
  },
  shim:{
    "angular":{
      exports:"angular"
    },
    "angularUiRouter":{
      deps:["angular"]
    },
    "uiBootstrap":{
      deps:["angular"]
    }
  },
  name:"public/bootstrap"
});

require(["bootstrap"],function(bootstrap){
  bootstrap.init();
});