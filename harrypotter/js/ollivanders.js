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
        url: 'images/wand2.svg',
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




