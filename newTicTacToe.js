  console.log('i connected');
  var moves = 0;
  var gameOver = false;

  var clickHandler = function()
  {
    if (!gameOver && !this.innerHTML.match(/[XO]/))
    {
      if (moves % 2 == 0)
      {
        this.innerHTML = 'X';
        moves = !moves;
      }else
      {
        this.innerHTML = 'O';
        moves = !moves; 
      }
      this.innerhtml = moves % 2 == 0 ? 'X' : 'O';
    }
    return false;
  };
  var idList = document.getElementsByTagName('td');
  var i;
  for (i = 0; i < idList.length; i++)
  {
    idList[i].addEventListener('click', clickHandler); 
  };

