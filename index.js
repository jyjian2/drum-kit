// // handleClick == passing this function as an imput. Do not give it a parentethis
// document.querySelector("button").addEventListener("click", handleClick);
//
// function handleClick() {
//   alert("I got clicked!");
// }
//
// // second method: Anonymous function
// document.querySelectorAll("button")[1].addEventListener("click", function() {
//   alert("I got clicked!!")
// });

// Apply handleClick function to all buttons
// var buttons = document.querySelectorAll("button");
var numOfDrum = document.querySelectorAll(".drum").length;
var drums = document.querySelectorAll(".drum");
for (var i = 0; i < numOfDrum; i++) {
  drums[i].addEventListener("click", function() {
    alert("I GOT CLICKED");
  });
}
