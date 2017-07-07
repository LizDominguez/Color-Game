/*jslint browser: true*/
/*global $, jQuery*/

  
var colors = generateColors(6);
   
var circles = document.querySelectorAll(".color");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorHeading");
var messageDisplay = document.getElementById("tryAgain");
colorDisplay.textContent = pickedColor;
var newColors = document.getElementById("newColors");

for(var i = 0; i < circles.length; i++){
  //add initial colors
    circles[i].style.backgroundColor = colors[i];
  
  //add click listeners
  circles[i].addEventListener("click", function(){
    //grab color of clicked square & compare to picked color 
    
   var clickedColor = this.style.backgroundColor;
    
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(pickedColor);
    }
    
    else {
      //will make wrong colors disappear
      this.style.backgroundColor = "#fafafa";
      messageDisplay.textContent = "Try Again";  
         }
    
  });
}


function changeColors(color) {
  //changes all circles to correct color
  for(var i = 0; i < circles.length; i++){
    circles[i].style.backgroundColor = color;
  } 
  
}

function pickColor() {
  //picks a random color
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

function generateColors(num) {
  //generates all the colors 
  var arr = [];
  
  for(var i = 0; i < num; i++){
    //get random color and add to array
    arr.push(randomColor());
  }
  
  return arr;
}

function randomColor() {
  //generates random colors: red, green, and blue 
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  
  return "rgb(" + r + ", " + g + ", " + b + ")";
  
}



