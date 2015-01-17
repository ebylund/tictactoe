  var moves = true, gameStatus = false, winSetX = [], winSetO = [];
  var clickHandler = function() {
    if (!gameStatus && this.innerHTML == '&nbsp;') {
      this.innerHTML = moves ? 'X' : 'O';
      if (this.innerHTML == 'X'){
        winSetX.push(this.id);
        winDetect(winSetX);
      }
      else{
        winSetO.push(this.id);
        winDetect(winSetO);
      }
      moves = !moves;
    }
  };
  var tagList = document.getElementsByTagName('td');
  var winDetect = function(testArray){
    var j = 0, t = 0;
    var winningKey = [
      // rows
      ["00", "10", "20"], ["01", "11", "21"], ["02", "12", "22"],
      // columns
      ["00", "01", "02"], ["10", "11", "12"], ["20", "21", "22"],
      // diagonal
      ["20", "11", "02"], ["00", "11", "22"]
    ];
    for (j = 0; j < winningKey.length; i++){
      for (t = 0; t < winningKey[j].length; i++){
        //winningKey[j][t]
      }
    }
  };

  for (var i = 0; i < tagList.length; i++) {
    tagList[i].onclick = clickHandler;
  };

