/* You just started your own airline, and you need to create a form to collect data about your passengers' upcoming travel plans so they can book their flight.

You should collect the following information from the user:

First name (text input)
Last name (text input)
Age (number input)
Gender (radio buttons with 2 or more options)
Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.
There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this:*/

var form = document.passengerData;
form.addEventListener("submit", function(event){
    event.preventDefault()
    
    //alert("its working")
    var checkedBox = []
    for (var i = 0; i < form.dietary.length; i++){
        if(form.dietary[i].checked){
        checkedBox.push(form.dietary[i].value)
        }
    }
    var firstName = form.firstName.value
    var lastName = form.lastName.value
    var age = form.age.value
    var gender = form.gender.value
    var location = form.city.value
    // to clear the boxes after click the alert do the following 
    form.firstName.value = ""
    form.lastName.value = ""
    form.age.value = ""
    form.gender.value = ""
    form.city.value = ""
    form.phone.value = ""
    
    alert("First name: "+firstName+"\nLast name: "+lastName+"\nAge: "+age+"\nGender: "+gender+"\nLocation: "+location+"\nDietary Restrictions: "+checkedBox)
    //console.log(checkedBox) to see which box has been checked with the value of( halal, lactos, kosher, vegetarian) go see them on the console
    //console.log(form.city.value) to see which has city been chosen with value of (los angeles, dubai, barcelona) go see them in the console 
}) 