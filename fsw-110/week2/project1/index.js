var nav = document.createElement("nav")    // create navbar 
document.body.append(nav)                  //attach it to html body

var home = document.createElement("a")     // create a link
home.textContent = "HOME"                  // add text
home.href = "google.com"                   // link it  

var about = document.createElement("a")    // create another link
about.textContent = "ABOUT"                // add text
about.href = "any.com"                     // link it


var contact = document.createElement("a")  // create another link 
contact.textContent = "CONTACT"            // add text
contact.href = "any.com"                   // link it

nav.append(home,about,contact)             // get all links and out tem in the nabar

var h1 = document.createElement("h1")
h1.textContent = "Happy Thanksgiving"
document.body.append(h1)

var p = document.createElement("p")
p.textContent = "How was your Thanksgiving?? hope you all had fun with your family. I did the following:"
document.body.append(p)

var ol = document.createElement("ol")
document.body.append(ol)

var li = document.createElement("li")
li.textContent = "Turky"
var li1 = document.createElement("li")
li1.textContent = "Whiscky"
var li2 = document.createElement("li")
li2.textContent = "Wine"
ol.append(li,li1,li2)

var h6 = document.createElement("h6")
h6.textContent = "©2020 MIKE"
document.body.append(h6)
