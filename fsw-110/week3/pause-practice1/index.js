var H1 = document.createElement("h1");
H1.innerHTML = "Hello World";
document.body.append(H1);
H1.style.backgroundColor = "green";
H1.style.fontSize = "50px";
H1.style.color = "red";
// just extra step H1.removeAttribute("style");
// or H1.setAttribute("style", "color: white; background-color: red;");

for (var i = 0; i < 10; i++) {
var H1 = document.createElement("h1");
H1.innerHTML = " Hello World"; 
document.body.append(H1);
H1.style.color = "red";
H1.style.cssText = "text-align: center; font-size: 30px; color: green;";
// or H1.setAttribute("style", "color: white; background-color: red;");
}
// or
/*var h1 = " Hello World!";
for (var i = 0; i < 10; i++){
  document.body.append(h1);
}*/

var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
for (var i = 0; i < names.length; i++){
    var li = document.createElement("li")
    li.innerHTML = names[i]
    document.body.append(li)
}



