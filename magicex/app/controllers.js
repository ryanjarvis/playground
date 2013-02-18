var card_config = {
  cards : [],
  selected_card : {},
  selected_card_id : 0,
  buy_orders : [],
  sell_orders : []
};

card_config.getCardById = function(id){
  for (var i=0; i < card_config.cards.length; i++) {
    console.log(card_config.cards[i]);
    if(card_config.cards[i].id == card_config.selected_card_id){
      
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

  $scope.getBuyOrders = function(){
    $http.get('/orders/card/'+$scope.card_config.selected_card_id).success( function(data,status) {
      $scope.card_config.buy_orders = orderListFilter(data, 'b');
    });
  };

  $scope.getSellOrders = function(){
    $http.get('/orders/card/'+$scope.card_config.selected_card_id).success( function(data,status) {
      $scope.card_config.sell_orders = orderListFilter(data, 's');
    });
  };

  $scope.setSelectedCard = function(){
    $scope.card_config.selected_card = card_config.getCardById($scope.card_config.selected_card_id);
    $scope.getBuyOrders();
    $scope.getSellOrders();
  };
}

function orderListFilter(data, filter_type){
  var filtered_orders = [];

  for (var i = 0; i < data.orders.length; i++) {
    if(data.orders[i].type === filter_type){
      filtered_orders.push(data.orders[i]);
    }
  }
  _.sortBy(filtered_orders, function (element){
    return element.price;
  });

   return filtered_orders;
}



function CardDetailController($scope, $http){
  $scope.card_config = card_config;


}
