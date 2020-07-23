//Grab variables using Document Object Model.
var squares = document.querySelectorAll('td');

//Function that changes X and O
function changeSymbol() {
  if(this.textContent === ''){
    this.textContent = 'X';
    // console.log(marker)
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
};

//For loop for listeners
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeSymbol);
}
