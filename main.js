/*jslint browser: true*/
/*global $, jQuery*/

var numCircles = 6; 
var colors = generateColors(numCircles);   
var circles = document.querySelectorAll(".color");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorHeading");
var messageDisplay = document.getElementById("tryAgain");
colorDisplay.textContent = pickedColor;
var newColors = document.getElementById("newColors");
var reset = document.querySelector("#newColors");
var easy = document.querySelector("#easyMode");
var hard = document.querySelector("#hardMode");
hard.classList.add("selected");

easy.addEventListener("click", function(){
  easy.classList.add("selected");                   
  hard.classList.remove("selected");
  numCircles = 3;
  colors = generateColors(numCircles);
  pickedColor = pickColor();
  colorDisplay = pickedColor;
  
  for (var i = 0; i < circles.length; i++) {
    
    if(colors[i]){
      circles[i].style.backgroundColor = colors[i]; 
    }
    
   else circles[i].style.display = "none";
    
  } 
});

hard.addEventListener("click", function(){
    hard.classList.add("selected");               
    easy.classList.remove("selected");
    numCircles = 6;
    colors = generateColors(numCircles);
    pickedColor = pickColor();
    colorDisplay = pickedColor;
  
  for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i]; 
    circles[i].style.display = "block";
  }
    
});

reset.addEventListener("click", function(){
  //generates new colors & picks new random color
  colors = generateColors(numCircles); 
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  reset.textContent = "New Colors";
  
  for(var i = 0; i < circles.length; i++){
  //add initial colors
    circles[i].style.backgroundColor = colors[i];
  }
                      
});


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
      reset.textContent = "Play Again?";
    }
    
    else {
      //will make wrong colors disappear
      this.style.backgroundColor = "#ebebeb";
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



