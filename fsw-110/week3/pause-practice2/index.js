/* This assignment will help you practice adding CSS styles to elements created in Javascript.

1. Create a new folder with an html, css, and js file (Hint: Make sure the html file is linked to the css and js file)
2. In the JS file, create a list of 5 H2 elements on the DOM using a for loop (Hint: this was covered in the previous assignment). Give them whatever text you would like.
3. Using the .style property, edit the element’s styles in your js to have:


Font-size: 20px
Font-weight: lighter
Font-family: sans-serif
Color: cornflowerblue


4. Go to your CSS file and create a class called .border that has:


2px solid black border,
5px padding
5px margin


5. Back in your JS, add that class to the elements being created using classList.*/

for ( var i = 0; i < 5; i++) {
var H2 = document.createElement("h2");
H2.innerHTML = "happy holidays";
document.body.append(H2);
H2.style.fontSize = "20px";
H2.style.fontWeight = "lighter";
H2.style.fontFamily = "sans-serif";
H2.style.color = "cornflowerblue";
H2.classList.add("border");
}
