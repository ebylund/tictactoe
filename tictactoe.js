var moves = true, gameStatus = false, winSetX = [], winSetO = [];

var winningKey = [
  // rows
  ["square00", "square10", "square20"], ["square01", "square11", "square21"], ["square02", "square12", "square22"],
  // columns
  ["square00", "square01", "square02"], ["square10", "square11", "square12"], ["square20", "square21", "square22"],
  // diagonal
  ["square20", "square11", "square02"], ["square00", "square11", "square22"]
];

var currentBoard = [
  0,0,0,
  0,0,0,
  0,0
];

var j = 0, t = 0, r = 0, i = 0, p = 0, q = 0;

var clickHandler = function() {
  if (!gameStatus && this.innerHTML == '&nbsp;') {
    this.innerHTML = moves ? 'X' : 'O';
    if (this.innerHTML == 'X'){
      winSetX.push(this.id);
      winDetect(winSetX, this);
    }
    else{
      winSetO.push(this.id);
      winDetect(winSetO, this);
    }
    moves = !moves;
  }
};

var winDetect = function(testArray, that){
  for (j = 0; j < testArray.length; j++){
    for (t = 0; t < winningKey.length; t++){
      for (r = 0; r < winningKey[t].length; r++){
        if (testArray[j] == winningKey[t][r] && testArray[j] == that.id){
          if (that.innerHTML == 'X'){
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
  for (i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i] == 3){
      winningList.push(i);
      player = 'X';
    }
    if (currentBoard[i] == -3){
      winningList.push(i);
      player = 'O';
    }
  };

  if (winningList.length > 0){
    highlight(winningList, player);
  }
};

var highlight = function(posList, player) {
  var q = 0, p = 0;
  for (q = 0; q < posList.length; q++){
    for (p = 0; p < winningKey[posList[q]].length; p++){
      var winner = document.getElementById(winningKey[posList[q]][p]);
      winner.className = 'winner';
    }
  }
  alert('Player ' +player+ ' won!');
  location.reload();
}

var tagList = document.getElementsByTagName('td');

for (var i = 0; i < tagList.length; i++) {
  tagList[i].addEventListener('click', clickHandler);
};
