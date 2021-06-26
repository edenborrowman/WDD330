let houses = [
    "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"
];

var randomNum = Math.floor(Math.random() * houses.length);
console.log(randomNum);

//add event listener for button click
document.addEventListener("click", (event) => {
    var assigned_house = houses[randomNum];
    console.log(assigned_house);
    var dressed = "images/" + houses[randomNum].toLowerCase() + "_student.svg";
    console.log(dressed);

    document.querySelector(".announcement").textContent = assigned_house + "!";
    document.querySelector(".student").src = dressed;
    toggleHide(hat);
    
});

// function to toggle hat

hat = document.querySelector("#hat")
function toggleHide(hat) {
    hat.classList.toggle('hide');
}