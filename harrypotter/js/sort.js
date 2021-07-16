import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import { click } from "./audio.js";
import { resetHat } from "./reset.js";

let houses = [
    "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"
];

//add event listener for clicking on hat

var hat = document.querySelector("#hat");
document.querySelector("#hat").addEventListener("click", (event) => {
    // Clear out any old styling
    resetHat();
    hat.classList.add("sort_in_progress");
    setTimeout(magical_change, 3000);    
});

// All the magical transformations

function magical_change() {
    // Generate random number
    var randomNum = Math.floor(Math.random() * houses.length);
       
    // Assign a house
    var assigned_house = houses[randomNum];

    // Assign student clothing
    var dressed = "images/" + houses[randomNum].toLowerCase() + "_student.svg";

    // Hat change
    var hatChange = "images/sorting_hat_illustration.svg";
       
    // Display name of house, change hat, and robe for student
    document.querySelector(".announcement").textContent = assigned_house + "!";
    document.querySelector(".student").src = dressed;
    document.querySelector("#hat").src = hatChange;
    
    // Play harp sound
    click.play();      
    
    // Deploy confetti
    confetti();        
    }
 
    




 