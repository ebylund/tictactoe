var moves = true, gameStatus = false, winSetX = [], winSetO = [];

var winningKey = [
  // rows
  ["square00", "square10", "square20"], ["square01", "square11", "square21"], ["square02", "square12", "square22"],
  // columns
  ["square00", "square01", "square02"], ["square10", "square11", "square12"], ["square20", "square21", "square22"],
  // diagonal
  ["square20", "square11", "square02"], ["square00", "square11", "square22"]
];

var  i = 0, j = 0;
var winningList = [];

var clickHandler = function() {
  if (!gameStatus && this.innerHTML == '&nbsp;') {
    this.innerHTML = moves ? 'X' : 'O';
    winDetect(this);
    moves = !moves;
  }
};

var winDetect = function(that){
  for (i = 0; i < winningKey.length; i++){
    if (winningKey[i][0] == 'X'){
      console.log('winner man!');
    }
  }
};

var tagList = document.getElementsByTagName('td');
for (var i = 0; i < tagList.length; i++) {
  tagList[i].onclick = clickHandler;
};
