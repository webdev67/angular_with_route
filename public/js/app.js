'use strict';

var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
    var states = [{
        url: '/home',
        controller: "articlesController",
        name: "listarticles",
        templateUrl: "/templates/list_articles.html"
    }, {
        url: '/article/:id/preview',
        controller: "articlesController",
        name: "articlepreview",
        templateUrl: "/templates/article_preview.html"
    }, {
        url: '/article/search',
        controller: "searchController",
        name: "search",
        templateUrl: "/templates/article_search.html"
    }, {
        url: '/article/filter',
        controller: "filterController",
        name: "filter",
        templateUrl: "/templates/article_filter.html"
    }];
    for (var state in states) {
        $stateProvider.state(states[state]);
    }

    $urlRouterProvider.otherwise('/home');

});
app.endpoint = "https://loftcogcamnlp03.azurewebsites.net/morningstar/news/";
// app.filter('highlightWord', function() {
//     return function(text, selectedWord) {
//         for (var p in selectedWord) {
//             if (selectedWord[p])
//                 var pattern = new RegExp(selectedWord[p], "g");
//             return text.replace(pattern, '<span class="highlighted">' + selectedWord[p] + '</span>');
//         } else {
//             return text;
//         }
//     }
// });
console.log(app);
console.log("here");
