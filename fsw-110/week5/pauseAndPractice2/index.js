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
    
    alert("First name: "+firstName+"\nLast name: "+lastName+"\nAge: "+age+"\nGender: "+gender+"\nLocation: "+location+"\nDietary: "+checkedBox)
    //console.log(checkedBox) to see which box has been checked with the value of( halal, lactos, kosher, vegetarian) go see them on the console
    //console.log(form.city.value) to see which has city been chosen with value of (los angeles, dubai, barcelona) go see them in the console 
}) 