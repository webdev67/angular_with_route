'use strict';

define(["bootstrap","articleService"], function(app,articleService) {
    var articlesController = ['$scope', '$http', '$stateParams', '$sce', '$rootScope', 'articleService', function($scope, $http, $stateParams, $sce, $rootScope, articleService) {
        $scope.largeArticle = "";
        $scope.keywords = [];

        if (typeof($stateParams.id) !== "undefined") {
            articleService.getArticle($stateParams.id).then(function(result) {
                $scope.largeArticle = "";
                $scope.keywords = [];

                for (var i = 0; i < result.data.text.length; i++) {

                    $scope.largeArticle += result.data.text[i].sentence;
                    if (typeof(result.data.text[i].classification) !== "undefined" && result.data.text[i].classification.length > 0) {
                        for (var p = 0; p < result.data.text[i].classification.length; p++) {
                            if ($scope.keywords.indexOf(result.data.text[i].classification[p].key) == -1) {
                                $scope.keywords.push(result.data.text[i].classification[p].key);
                            }
                        }
                    }
                }
            });
        } else {
            articleService.getArticles().then(function(e) {
                $scope.articles = e;
            })
        }

        $scope.toTrustedHTML = function(html) {
            return $sce.trustAsHtml(html);
        }
    }];
    app.$controllerProvider.register('articlesController', articlesController);

});
