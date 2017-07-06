/*jslint browser: true*/
/*global $, jQuery*/

  
var colors = [
  "rgb(0, 255, 255)",
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(250, 50, 50)"
]
   
var squares = document.querySelectorAll(".color");

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}
  

  



