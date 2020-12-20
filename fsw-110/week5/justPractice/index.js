// to get which check boxes are check.
// You could also get at the list of checkboxes, loop through them, and make another array of just the values of all the checked ones.
document.animals.addEventListener("submit", function(e){
    e.preventDefault()
    //assign our animals that are liked to a variable
    var animals = document.animals.likes
    //create a new array that we can fill with the values (as strings) of our checkboxes
    var checkedAnimals = []
    //loop through each checkbox
    for (var i = 0; i < animals.likes.length; i++){
      //check to see if the checkbox is checked
      if(animals[i].checked){
        //add the values to our new array
        checkedAnimals.push(animals[i].value)
      }
    }
    console.log(checkedAnimals)
  })

  // another easier way
  // Fortunately, there's a slightly easier alternative we can use to get the list of checked items using document.querySelectorAll:
  document.animals.addEventListener("submit", function(e){
    e.preventDefault()
    var checkedAnimals = [];
    var checkedBoxes = document.querySelectorAll("input[name=likes]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedAnimals.push(checkedBoxes[i].value);
    }
    console.log(checkedAnimals)
});