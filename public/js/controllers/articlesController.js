var articlesController = app.controller("articlesController", ['$scope', '$http', '$stateParams', '$sce','$rootScope', function($scope, $http, $stateParams, $sce,$rootScope) {
    $scope.largeArticle = "";
    $scope.keywords = [];
    $http.get(app.endpoint).then(function(result) {

        if (result.status == 200) {
            $scope.articles = result.data.payload;
            console.log($scope.articles);
        }
    });
    if (typeof($stateParams.id) !== "undefined") {
        $http.get(app.endpoint + $stateParams.id).then(function(result) {
            $scope.largeArticle = "";
            $scope.keywords = [];

            for (var i = 0; i < result.data.text.length; i++) {

                $scope.largeArticle += result.data.text[i].sentence;
                if (typeof(result.data.text[i].classification)!=="undefined" && result.data.text[i].classification.length > 0) {
                    for (var p = 0; p < result.data.text[i].classification.length; p++) {
                        if ($scope.keywords.indexOf(result.data.text[i].classification[p].key) == -1) {
                            $scope.keywords.push(result.data.text[i].classification[p].key);
                        }
                    }
                }
            }
            console.log($scope.keywords);
        });
    }

    $scope.toTrustedHTML = function(html) {
        return $sce.trustAsHtml(html);
    }
}]);
