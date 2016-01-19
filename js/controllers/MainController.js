app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	$scope.games = null;
	$http.get('data/boardgames.json')
		.success(function(data) {
			$scope.games = data;
		})
		.error(function(data) {
			$scope.games = null;
	});
}]);
