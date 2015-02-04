//initial a few variable that are used throughout the game
var moves = true, counter = 0, gameStatus = false, winSetX = [], winSetO = [];

//an array of array that list the possible winning sequences.
var winningKey = [
  // rows
  ["square00", "square10", "square20"], ["square01", "square11", "square21"], ["square02", "square12", "square22"],
  // columns
  ["square00", "square01", "square02"], ["square10", "square11", "square12"], ["square20", "square21", "square22"],
  // diagonal
  ["square20", "square11", "square02"], ["square00", "square11", "square22"]
];
//this is the current state of my board. I use this to tally which sequence is the winning one
var currentBoard = [
  0,0,0,
  0,0,0,
  0,0
];

//My clickHandler variable that is envoked upon click of a single square.
var clickHandler = function() {
//I check to see if the game isn't over and the square i clicked is empty.
  if (!gameStatus && this.innerHTML == '&nbsp;') {
    counter += 1;
// This ternary operator alternated the X's and O's depending on the turn.
    this.innerHTML = moves ? 'X' : 'O';
//I check to see if the element that i clicked on is an X
//and if it is, i append it to an exclusive x array and then
//check to see if I have a winning sequence
    if (this.innerHTML == 'X'){
      winSetX.push(this.id);
      winDetect(winSetX, this);
    }
    else{
      winSetO.push(this.id);
      winDetect(winSetO, this);
    }
// to alternate from x's to o's
    moves = !moves;
  }
//if all are full, then tie game ends the game
  if (counter >= 9 && gameStatus == false){
    alert('Tie Game!');
    location.reload();
  }
};

// test to see if array that is passed in contains a winning sequence

var winDetect = function(testArray, that){
  var j = 0, t = 0, r = 0, i = 0;
//loops through the test array of current x's or o's.
  for (j = 0; j < testArray.length; j++){
// loops into the winning sequence to compare values
    for (t = 0; t < winningKey.length; t++){
      for (r = 0; r < winningKey[t].length; r++){
// the test to see if the test array and any sequence match
        if (testArray[j] == winningKey[t][r] && testArray[j] == that.id){
          if (that.innerHTML == 'X'){
// updates current board if a match is found in the corresponding sequence
            currentBoard[t] += 1;
          }
          else if(that.innerHTML == 'O'){
            currentBoard[t] -= 1;
          }
        }
      }
    }
  }

  var winningList = [];
  var player = '';
// if any value of the current board is 3, then a winner has been detected and
// then calls the highlight function
  for (i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i] == 3){
// I push it to an array so i can pass the array into the highlight function
// to highlight multiple winners
      winningList.push(i);
      player = 'X';
    }
    if (currentBoard[i] == -3){
      winningList.push(i);
      player = 'O';
    }
  };
// i return the list of 1 or more winning combinations to be highlighted
  if (winningList.length > 0){
    highlight(winningList, player);
  }
};

// the highlight function receives a list of winning key indexes to highlight
// as well as the player with whom those wins are associated
var highlight = function(posList, player) {
  var q = 0, p = 0;
  // if the length is greater than one, the loop goes through them and 
  // highlights each sequence with the winner class
  for (q = 0; q < posList.length; q++){
    for (p = 0; p < winningKey[posList[q]].length; p++){
      var winner = document.getElementById(winningKey[posList[q]][p]);
      winner.className = 'winner';
    }
  }

  gameStatus = true;
  alert('Player ' +player+ ' won!');
  location.reload();
}

var tagList = document.getElementsByTagName('td');

for (var i = 0; i < tagList.length; i++) {
  tagList[i].addEventListener('click', clickHandler);
};
