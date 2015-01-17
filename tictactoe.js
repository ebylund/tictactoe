  var moves = true, gameStatus = false, winSet = [];
  var clickHandler = function() {
    if (!gameStatus && this.innerHTML == '&nbsp;') {
      this.innerHTML = moves ? 'X' : 'O';
      winSet.push(this.id);
      console.log(winSet);
      moves = !moves;
    }
  };
  var i, tagList = document.getElementsByTagName('td');
  for (i = 0; i < tagList.length; i++) {
    tagList[i].onclick = clickHandler;
  };
  var winDetect = function(){
    var winningKey = [
   // rows
      ["square00", "square10", "square20"],
      ["square01", "square11", "square21"],
      ["square02", "square12", "square22"],
    // columns
      ["square00", "square01", "square02"],
      ["square10", "square11", "square12"],
      ["square20", "square21", "square22"],
    // diagonal
      ["square20", "square11", "square02"],
      ["square00", "square11", "square22"]
    ];
  };