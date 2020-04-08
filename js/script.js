{
function playGame(playerInput){
  clearMessages()

  //moves' names
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }else if (argMoveId == 2) {
      return 'papier';
    }else if (argMoveId == 3) {
      return 'nożyce';
    }

    printMessage(argMoveId + '=ZONK!!!!');
    return 'ZONK!';
  }

  //Player's turn

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  let playerMove = getMoveName(playerInput);
console.log('players move:' + playerMove);
  //Computer's turn

  let computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
console.log('computers move:' + computerMove);

  printMessage('Twój ruch to ' + playerMove + ', a mój ruch to ' + computerMove + '.');

  printMessage('Zatem:');

  //Results

  function displayResult(argComputerMove, argPlayerMove){
console.log('moves:', argComputerMove, argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Wygrywasz!');
    }else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Przegrywasz!');
    }else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Remis');
    }else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Remis!');
    }else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Wygrywasz!');
    }else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Przegrywasz!');
    }else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Wygrywasz!');
    }else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Przegrywasz!');
    }else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('Remis');
    }
  }

  let result = displayResult(computerMove, playerMove)
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}
