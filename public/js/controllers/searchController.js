define(['bootstrap', 'articleService', 'uiBootstrap', 'uiBootstrapTpl'], function(app, articleService, uiBootstrap, uiBootstrapTpl) {
    var searchController = ['$scope', 'articleService', '$uibModal', function($scope, articleService, $modal) {
        articleService.getArticles().then(function(e) {
            $scope.articles = e;
            $scope.fullData = [];
            $scope.articles.forEach(function(article) {


                articleService.getArticle(article.guid).then(function(result) {
                    var largeArticle = "";
                    $scope.keywords = [];

                    result.data.text.forEach(function(singleData) {

                        largeArticle += singleData.sentence;
                        if (typeof(singleData.classification) !== "undefined" && singleData.classification.length > 0) {
                            singleData.classification.forEach(function(classification) {
                                if ($scope.keywords.indexOf(classification.key) == -1) {
                                    $scope.keywords.push(classification.key);
                                }
                            });
                        }
                    });
                    var text = angular.copy(largeArticle);
                    var heading = angular.copy(article.heading);
                    $scope.fullData.push({
                        "text": text,
                        "heading": heading
                    });
                    if ($scope.fullData.length == $scope.articles.length) {
                        $scope.$broadcast("done");
                    }
                });


            });
        });

        $scope.init = function() {
            var modalInstance = $modal.open({
                template: "<h1>loading data..please wait</h1>"
            });

            $scope.$on("done", function() {
                modalInstance.close();
            });
        }
        $scope.searchMe = {};
        $scope.textFilter = function(item) {
            return item.text.match(new RegExp($scope.searchMe.data, "gi")) !== null || item.heading.match(new RegExp($scope.searchMe.data, "gi")) !== null;
        }

        $scope.doSearch = function() {

        }

        $scope.init();
    }];
    app.$controllerProvider.register("searchController", searchController);
});
