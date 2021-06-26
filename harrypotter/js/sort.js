let houses = [
    "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"
];

var randomNum = Math.floor(Math.random() * houses.length);
console.log(randomNum);

var assigned_house = houses[randomNum];
console.log(assigned_house);
var dressed = "images/" + houses[randomNum].toLowerCase() + "_student.svg";
console.log(dressed);

document.querySelector(".announcement").textContent = assigned_house + "!";
document.querySelector(".student").src = dressed;