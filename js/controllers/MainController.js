app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	$scope.all_games = null;
	$scope.games = null;
	$http.get('data/boardgames.json')
		.success(function(data) {
			$scope.all_games = data;
			$scope.games = data;
		})
		.error(function(data) {
			$scope.all_games = null;
	});
	
	$scope.playersSlider = {
	  value: 2,
	  options: {
	    floor: 1,
	    ceil: 10,
	    onEnd: function() {
	    	players = $scope.playersSlider.value;
	    	cur_games = [];
	    	for (index =0;index<$scope.all_games.length;index++) {
	    		if ($scope.all_games[index].playersmin <= players && $scope.all_games[index].playersmax >= players) {
	    			cur_games.push($scope.all_games[index]);
	    		}
	    	}
	    	$scope.games = cur_games;
		}
	  }
	};

}]);
