/* Create a new html and js file, then link them together.
In the js file, create the following elements and append them to the DOM so they show up when the website is visited.
H1 with the text “Welcome to my JS site”
P wit the text “All of this was created with Javascript”
An Ordered list (ol) with at least three items (li).
Each li should also display text.
Remember, you will need to first add the li’s to the ol before putting the ol on the DOM.*/
var newHeader = document.createElement("h1")
newHeader.textContent = "Welcome to my J.S site"
document.body.append(newHeader)

var newParagraph = document.createElement("p")
newParagraph.textContent = "All of this was created with Javascript"
document.body.append(newParagraph)

var newLi = document.createElement("li")
newLi.textContent = "0"
var newLi1 = document.createElement("li")
newLi1.textContent = "1"
var newLi2 = document.createElement("li")
newLi2.textContent = "2"
var myOl = document.createElement("ol")
myOl.append(newLi,newLi1,newLi2)
document.body.append(myOl)