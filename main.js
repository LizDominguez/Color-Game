/*jslint browser: true*/
/*global $, jQuery*/

  
var colors = generateColors(6);
   
var circles = document.querySelectorAll(".color");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorHeading");
var messageDisplay = document.getElementById("tryAgain");
colorDisplay.textContent = pickedColor;
var newColors = document.getElementById("newColors");
<<<<<<< HEAD
var resetBtn = document.querySelector("#newColors");
var mode = document.querySelectorAll(".difficulty");
hardMode.classList.add("selected");

for (var i = 0; i < mode.length; i++){
  mode[i].addEventListener("click", function(){
    mode[0].classList.remove("selected");
    mode[1].classList.remove("selected");
    this.classList.add("selected");  
    
    this.textContent === "Easy" ? numCircles = 3: numCircles = 6;
    
    reset();
    
  });
}

function reset(){
  //generates new colors & picks new random color
  colors = generateColors(numCircles); 
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  reset.textContent = "New Colors";
  messageDisplay.textContent = " ";
  
  for(var i = 0; i < circles.length; i++){
  //add initial colors
    if(colors[i]){
      circles[i].style.display = "block"; 
      circles[i].style.backgroundColor = colors[i]; 
    }
    else circles[i].style.display = "none";
  }
  
}

resetBtn.addEventListener("click", function(){
  reset();                    
});

=======
>>>>>>> parent of dee62de... easy/hard mode

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
<<<<<<< HEAD
      this.style.backgroundColor = "#ebebeb";
      this.style.transition = "background-color 0.3s";
=======
      this.style.backgroundColor = "#fafafa";
>>>>>>> parent of dee62de... easy/hard mode
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



