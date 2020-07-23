// Alright so we've discussed the way you can grab html elements, let's
// see how we can interact with them in Javascript!

// Type this into your console:

// Grab the Header with h1
var header = document.querySelector("h1")

// Then you can interface with the object.

// Interface with the style.
//You will see a ton of options show up!
header.style.color = 'red'

// Now let's connect it to the script to
// change it once every second to a random color!

// Random Color Function:

// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

// Simple function for clarity
function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

// Now perform the action over intervals (milliseocnds):
setInterval("changeHeaderColor()",500);

//Grab event texts
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');

//Hover listeners
one.addEventListener("mouseover",function(){
  one.textContent = "The mouse is on me!"
  one.style.color = 'red'
})
one.addEventListener("mouseout",function(){
  one.textContent = "HOVER OVER ME!";
  one.style.color = 'black';
})

//Click listeners
two.addEventListener("click", function() {
  two.textContent = "I've been clicked!!";
  two.style.color = 'purple';
})

//Double click listeners
three.addEventListener("dblclick", function(){
  three.textContent = "I've been double clicked!";
  three.style.color = 'orange';
})
