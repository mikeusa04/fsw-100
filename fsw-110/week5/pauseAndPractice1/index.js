function getdetails(){
var a = document.forms["details"]["lastname"].value;
var b = document.forms["details"]["firstname"].value;
var c= document.forms["details"]["email"].value;
alert("Your name is: "+a+" "+b+"\nYour e-mail is: "+c);
}

//window.alert("hiiii")

document.words.addEventListener("submit", function(e){
    e.preventDefault()
    var noun = document.words.noun.value
    var adverb = document.words.adverb.value
    var verb = document.words.verb.value
    // to clear the boxes after we use them do the bellow
    document.words.noun.value = "" 
    document.words.adverb.value = ""
    document.words.verb.value = ""
    alert("The " + noun + " did" + adverb + " " + verb + " in it's home");
})