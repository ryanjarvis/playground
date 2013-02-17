var card_config = {
  cards: [],
  selected_card: {},
  selected_card_id: 0
};

card_config.getCardById = function(id){
  for (var i=0; i < card_config.cards.length; i++) {
    console.log(card_config.cards[i]);
    if(card_config.cards[i].id == card_config.selected_card_id){
      console.log(card_config.cards[i]);
      return card_config.cards[i];
    }
  }
};

function CardController($scope, $http) {
  $scope.card_config = card_config;
  $scope.getAllCards = function() {
		$http.get('/cards').success( function(data,status) {
			$scope.card_config.cards = data.cards;
      $scope.card_config.selected_card = $scope.card_config.cards[0];
      $scope.card_config.selected_card_id = $scope.card_config.cards[0].id;
      
		});
	};
  $scope.setSelectedCard = function(){
    $scope.card_config.selected_card = card_config.getCardById($scope.card_config.selected_card_id);
  }
}


function CardDetailController($scope, $http){
  $scope.card_config = card_config;
}