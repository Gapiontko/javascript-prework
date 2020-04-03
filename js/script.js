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

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

//Computer

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

//Wyniki

function displayResult(argComputerMove, argPlayerMove){
  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Wygrywasz!');
  }else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyczki'){
    printMessage('Przegrywasz!');
  }else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis');
  }else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
  }else if(argComputerMove == 'papier' && argPlayerMove == 'nożyczki'){
    printMessage('Wygrywasz!');
  }else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz!');
  }else if(argComputerMove == 'nożyczki' && argPlayerMove == 'kamień'){
    printMessage('Wygrywasz!');
  }else if(argComputerMove == 'nożyczki' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz!');
  }else if(argComputerMove == 'nożyczki' && argPlayerMove == 'nożyczki'){
    printMessage('Remis');
  }else {
    printMessage('Jesteś frajerem i przegrywasz walkowerem!')
  }
}

let result = displayResult(computerMove, playerMove)
