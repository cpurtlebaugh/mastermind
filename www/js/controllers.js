angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {

  // These icon classes are for mapping the selected guesses to the UI
  $scope.icons = ['ion-social-apple', 'ion-social-android','ion-social-angular','ion-social-html5'];

  // The current selected icon to assign to any clicked position.
  // TODO: Needs to be set when buttons in menu.html are clicked.
  $scope.selectedIcon = 0;

  var = code;

  $scope.numIcons     = $scope.icons.length;
  $scope.numPositions = $scope.icons.length;
  //class from menu.html
 $scope.placeholderIcon = 'ion-more';
  // Initialize game state
  $scope.newGame = function() {
    // TODO: Set all data properties/structures to their beginning state
    code = generateCode();
    //initial turns is 0 so an empty array to account for
    //future number of turns
    $scope.turns =[];
    //invokes a new turn when new game is started with ng-click
    newTurn();
  };

  // Run newGame() upon loading
  $scope.newGame();

  /*
  TODO: Call this function when the user clicks a 'score' button.
        The 'score' button should remain disabled until all positions have a value.
        Maybe a button with an icon of a checkmark would be a good UI choice? Or,
        just use a small button with text of 'Score'?
  */
  $scope.scoreTurn = function() {
    // TODO: Score the turn

    // TODO: Show winModal IF turn is correct. Put below line in an if statement.
    // $scope.winModal.show();
  };


  // Create the winner modal.
  $ionicModal.fromTemplateUrl('templates/winner.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.winModal = modal;
  });

  // TODO: Call this function from the 'Play Again!' button in winModal's html (winner.html)
  $scope.playAgain = function() {
    $scope.newGame();
    $scope.winModal.hide();
  };

 function newTurn() {
    $scope.turns.push(new Turn());
    $scope.currentTurn = $scope.turns[$scope.turns.length - 1];
  }
  function generateCode(){
    var answer = [];
    var i;
    while(i < 4){
      answer.push(Math.floor(Math.random() * $scope.numIcons));
      i++;
    }
    return answer;
  }

});

