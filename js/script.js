//Player's turn

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
  playerMove = 'papier';
}else if(playerInput == '3'){
  playerMove = 'nożyczki';
}else{
    playerMove = 'ZONK!';
  }

printMessage('Twój ruch to: ' + playerMove);

//Computer

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else {
  computerMove = 'nożyczki';
}

printMessage('Mój ruch to: ' + computerMove);

if(computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Wygrywasz!');
}else if(computerMove == 'kamień' && playerMove == 'nożyczki'){
  printMessage('Przegrywasz!');
}else if(computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis');
}else if(computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
}else if(computerMove == 'papier' && playerMove == 'nożyczki'){
  printMessage('Wygrywasz!');
}else if(computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Przegrywasz!');
}else if(computerMove == 'nożyczki' && playerMove == 'kamień'){
  printMessage('Wygrywasz!');
}else if(computerMove == 'nożyczki' && playerMove == 'papier'){
  printMessage('Przegrywasz!');
}else if(computerMove == 'nożyczki' && playerMove == 'nożyczki'){
  printMessage('Remis');
}else {
  printMessage('Jesteś frajerem i przegrywasz walkowerem!')
}
