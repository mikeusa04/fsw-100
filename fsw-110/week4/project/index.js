/* For this project, you are going to create a simple calculator that can add, subtract, and multiply.

Requirements:

You will have one section (<div>) for each math operation (so 3 sections) total
Each section has two inputs to take the first and second numbers
Each section will have a button to perform the operation
You will inject the result into the HTML (not an alert)
Your website will have 3 colors
Your website will have proper padding/spacing to lay things out nicely.*/

function add(){
    fst=parseInt(myform.fst.value);
    snd=parseInt(myform.snd.value);
    result=fst+snd;
    myform.result.value=result;
}

function subtract(){
    a=parseInt(myform1.a.value);
    b=parseInt(myform1.b.value);
    result=a-b;
    myform1.result.value=result;
}

function multiply(){
    c=parseInt(myform2.c.value);
    d=parseInt(myform2.d.value);
    result=c*d;
    myform2.result.value=result;
}

function divide(){
    e=parseInt(myform3.e.value);
    f=parseInt(myform3.f.value);
    result=e/f;
    myform3.result.value=result;
}

//var myform = document.getElementById("myform"); or
//document.getElementById("myform").style.backgroundColor = "yellow";
document.getElementById("myform").style.cssText = "border: 2px solid black; padding: 20px; margin: 20px; background-color: yellow"
myform.addEventListener("mouseover", function(){
    myform.style.backgroundColor = "red";
});

document.getElementById("myform1").style.cssText = "border: 2px solid black; padding: 20px; margin: 20px; background-color: yellow"
myform1.addEventListener("mousedown", function(){
    myform1.style.backgroundColor = "green";
});

document.getElementById("myform2").style.cssText = "border: 2px solid black; padding: 20px; margin: 20px; background-color: yellow"
myform2.addEventListener("mouseup", function(){
    myform2.style.backgroundColor = "orange";
});

document.getElementById("myform3").style.cssText = "border: 2px solid black; padding: 20px; margin: 20px; background-color: yellow"
myform3.addEventListener("dblclick", function(){
    myform3.style.backgroundColor = "dodgerblue";
});