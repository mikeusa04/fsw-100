console.log(document);
var header = document.getElementById("h1");
var text = document.createTextNode("hello people");
header.appendChild(text);
console.log(header);
console.dir(header);