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
var winningList = [];

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

  // console.log('X board:' + currentBoard);
  for (i = 0; i < currentBoard.length; i++) {

    if (currentBoard[i] == 3){
      console.log(currentBoard);
      winningList.push(i);
    }
    if (currentBoard[i] == -3){
      winningList.push(i);
    }

    if (winningList.length > 0){
      // highlight(winningList);
    }
  };
};

var highlight = function(winningList) {
  for (q = 0; q < winningList.length; q++){
    // console.log(winningKey[q]);
    // for (p = 0; p < winningKey[q]; p++){
    //   console.log(winningKey[p]);
    // }
    
  }
  // for (p = 0; p < winningKey.length; p++){
  //   for (q = 0; q < winningKey[t].length; q++){

  //   }
  // }
  // alert('Game Over!');
}

var tagList = document.getElementsByTagName('td');

for (var i = 0; i < tagList.length; i++) {
  tagList[i].onclick = clickHandler;
};
