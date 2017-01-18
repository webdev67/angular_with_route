define(["angular", "angularUiRouter", "uiBootstrap"], function(angular, angularUiRouter, uiBootstrap) {
    var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

    app.config(['$stateProvider',
        '$urlRouterProvider',
        '$controllerProvider',
        '$provide',
        '$filterProvider',
        function($stateProvider,
            $urlRouterProvider,
            $controllerProvider,
            $provide,
            $filterProvider) {
            var states = [{
                url: '/home',
                controller: "articlesController",
                name: "listarticles",
                templateUrl: "/templates/list_articles.html",
                resolve: {
                    loadDependencies: ['$q', function($q) {
                        var deferred = $q.defer();
                        require(['articlesController', 'navbarController'], function(articlesController, navbarController) {
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }]
                }
            }, {
                url: '/article/:id/preview',
                controller: "articlesController",
                name: "articlepreview",
                templateUrl: "/templates/article_preview.html",
                resolve: {
                    loadDependencies: ['$q', function($q) {
                        var deferred = $q.defer();
                        require(['articlesController', 'navbarController', 'highlighterFilter'], function(articlesController, navbarController) {
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }]
                }
            }, {
                url: '/article/search',
                controller: "searchController",
                name: "search",
                templateUrl: "/templates/article_search.html",
                resolve: {
                    loadDependencies: ['$q', function($q) {
                        var deferred = $q.defer();
                        require(['searchController', 'navbarController'], function(searchController, navbarController) {
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }]
                }
            }, {
                url: '/article/filter',
                controller: "filterController",
                name: "filter",
                templateUrl: "/templates/article_filter.html",
                resolve: {
                    loadDependencies: ['$q', function($q) {
                        var deferred = $q.defer();
                        require(['filterController', 'navbarController'], function(filterController, navbarController) {
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }]
                }
            }];
            for (var state in states) {
                $stateProvider.state(states[state]);
            }

            // Default Route11111111111
            $urlRouterProvider.otherwise('/home');

            // Providers
            app.$controllerProvider = $controllerProvider;
            app.$provide = $provide;
            app.$filterProvider = $filterProvider;

        }
    ]);
    app.endpoint = "https://loftcogcamnlp03.azurewebsites.net/morningstar/news/";

    app.init = function() {
        angular.bootstrap(document, ['app']);
    }
    return app;
});
