// Displays visually appealing info for a particular board game
app.directive('game', function(){
	return {
		restrict: 'E',
		scope: {
			data: '='
		},
		templateUrl: 'js/directives/game.html'
	}
})