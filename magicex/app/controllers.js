function CardController($scope, $http) {
	$scope.cards = []
	$scope.selected_card = {}
	$scope.getAllCards = function() {
		$http.get('/cards').success( function(data,status) {
			$scope.cards = data.cards
		})
	}
}
