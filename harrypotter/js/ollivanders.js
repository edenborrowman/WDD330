import { wandChime } from "./audio.js";
import { bustSwish } from "./audio.js";
import { reset } from "./reset.js";

let wands = [
    {
        wood: 'Holly',
        length: '11.5 inches',
        core: 'Phoenix Feather',
        character: 'Springy',
        url: 'images/wand1.svg'
    },
    {
        wood: 'Yew',
        length: '13 inches',
        core: 'Unicorn Hair',
        character: 'Responsive',
        url: 'images/wand9.svg',
    },
    {
        wood: 'Ash',
        length: '10.5 inches',
        core: 'Dragon Heartstring',
        character: 'Sensitive',
        url: 'images/wand3.svg',
    },
    {
        wood: 'Willow',
        length: '12 inches',
        core: 'Veela Hair',
        character: 'Tempermental',
        url: 'images/wand4.svg',
    },
    {
        wood: 'Cherry',
        length: '14 inches',
        core: 'Unicorn Hair',
        character: 'Powerful',
        url: 'images/wand5.svg',
    },
    {
        wood: 'Cypress',
        length: '10.25 inches',
        core: 'Dragon Heartstring',
        character: 'Bendy',
        url: 'images/wand6.svg',
    },

]

let randomWand = Math.floor(Math.random() * wands.length);

let wand = document.getElementById("yourWand");
let wood = document.getElementById("wood");
let length = document.getElementById("length");
let core = document.getElementById("core");
let character = document.getElementById("character");
 
wand.src = wands[randomWand].url;
wand.setAttribute("alt", "A new wand");
wood.innerText = "Wood: " + wands[randomWand].wood;
length.innerText = "Length: " + wands[randomWand].length;
core.innerText = "Core: " + wands[randomWand].core;
character.innerText = "Character: " + wands[randomWand].character;

document.getElementById("yourWand").addEventListener("click", (event) => {
  resetWand();
  wandMagic();
 
});

let wandMsg = [
  "Definitely not! Try again.",
  "No, no. Not that one. Try again.",
  "You're a tricky customer. Try again.",
  "Hm. That's not right, is it? Try again.",
  "Oh dear. Not that one. Try again.",
  "Wrong, wrong, wrong. Try again.",
  "That's clearly not it. Try again.",
  "Not that one. Try again.",
  "That's not a match. Try again.",
  "That doesn't fit. Try again."
]

function wandMagic() {
  let randomMessage = Math.floor(Math.random() * 10);

  
  if (randomMessage == 7 || randomMessage == 5 || randomMessage == 3) {
    wandChime.play();
    wand.classList.add('wand_is_chosen');
    document.getElementById("wandMessage").textContent = "You have been chosen! This is your wand.";
    

    }
  else {
      bustSwish.play();
      document.querySelector("#wandMessage").textContent = wandMsg[randomWand];
    }
}
  
function resetWand() {
  document.querySelector("#wandMessage").textContent = "";
  wand.classList.remove('wand_is_chosen');
}

document.querySelector("#reset_button").addEventListener("click", (event) => {
  reset()
});