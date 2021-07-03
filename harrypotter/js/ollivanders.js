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
console.table(wands);

let randomWand = Math.floor(Math.random() * wands.length);
    console.log(randomWand);

document.getElementById("yourWand").src = wands[randomWand].url;
document.getElementById("wood").innerText = "Wood: " + wands[randomWand].wood;
document.getElementById("length").innerText = "Length: " + wands[randomWand].length;
document.getElementById("core").innerText = "Core: " + wands[randomWand].core;
document.getElementById("character").innerText = "Character: " + wands[randomWand].character;

var dragItem = document.querySelector("#yourWand");
var container = document.querySelector("#wandContainer");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

function drag(e) {
  if (active) {
  
    e.preventDefault();
  
    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}