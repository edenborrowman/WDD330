import confetti from 'https://cdn.skypack.dev/canvas-confetti';

let houses = [
    "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"
];




//add event listener for button click
document.querySelector("#hat").addEventListener("click", (event) => {
    // Clear out any old styling
    reset();
    toggleHide(hat);
    hat.classList.add("sort_in_progress");
    setTimeout(magical_change, 3000);    
});

// function to toggle hat's visibility

    var hat = document.querySelector("#hat")
    function toggleHide(hat) {
    hat.classList.toggle('hide');
}

// All the magical transformations

function magical_change() {
    // Generate random number
    var randomNum = Math.floor(Math.random() * houses.length);
    console.log(randomNum);
   
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

 
    var click = new Audio('audio/harp.wav');

    function reset(){
        document.querySelector(".announcement").textContent = "";
        document.querySelector(".student").src = "images/harry_pre_sort.svg"
        document.querySelector("#hat").src = "images/sorting_hat_illustration_1.svg";   
        
        
    }


 