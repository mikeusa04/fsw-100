/* You're starting your business as a strictly online DJ (DJ JS) and you want to start by creating a website where people can change the color of a square on the page by interacting with different HTML Events.

The square's color will change as follows:

Blue when the mouse hovers over the square
Red when the mouse button is held down over the square
Yellow when the mouse button is let go over the square
Green when the mouse is double clicked in the square
Orange when the mouse scroll is used somewhere in the window (not just over the square).
You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color.*/
// create a square
var H1 = document.createElement("h1");
H1.innerHTML = "";
document.body.append(H1);
H1.style.fontSize = "40px";
H1.style.fontWeight = "lighter";
H1.style.fontFamily = "sans-serif";
H1.style.color = "cornflowerblue";
H1.style.textAlign = "center";
H1.style.padding ="100px";
H1.style.border = "2px solid black";
H1.style.height = "1000px";
H1.style.width = "300px";

// Blue when the mouse hovers over the square
H1.addEventListener("mouseover", function(){
    H1.style.backgroundColor = "blue"
});

// Red when the mouse button is held down over the square
H1.addEventListener("mousedown", function(){
    H1.style.backgroundColor = "red";
});

// Yellow when the mouse button is let go over the square
H1.addEventListener("mouseup", function(){
    H1.style.backgroundColor = "yellow";
});

// Green when the mouse is double clicked in the square
H1.addEventListener("dblclick", function(){
    H1.style.backgroundColor = "green";
});

// Orange when the mouse scroll is used somewhere in the window (not just over the square).
window.addEventListener("scroll", function(){
    H1.style.backgroundColor = "orange";
});

// You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color. Check this site for a full list of keyboard key codes
window.addEventListener("keydown", event => {
    if(event.key == "r"){
    H1.style.backgroundColor = "red";
    }
});
window.addEventListener("keyup", event => {
    if (event.key == "r") {
      H1.style.background = "";
    }
});

//this will be for the whole body not jut for H1
/*window.addEventListener("keyup", event => {
    if (event.key == "v") {
      document.body.style.background = "";
    }
  });*/