let spells = [
    {
        name: 'Alohamora',
        class: 'Charm',
        purpose: 'Opens locked objects',
        url: 'images/wandmotion1.svg'
    },
    {
        name: 'Oppungo',
        class: 'Jinx',
        purpose: 'Directs objects to attack target',
        url: 'images/wandmotion2.svg',
    },
    {
        name: 'Aparecium',
        class: 'Charm',
        purpose: 'Reveals invisible ink',
        url: 'images/wandmotion3.svg',
    },
    {
        name: 'Silencio',
        class: 'Charm',
        purpose: 'Temporarily silences victim',
        url: 'images/wandmotion4.svg',
    },
    {
        name: 'Specialis revelio',
        class: 'Charm',
        purpose: 'Reveals charms or hexes',
        url: 'images/wandmotion5.svg',
    },
    {
        name: 'Decendo',
        class: 'Charm',
        purpose: 'Lowers spellcaster down',
        url: 'images/wandmotion6.svg',
    },

    {
        name: 'Ascendio',
        class: 'Charm',
        purpose: 'Lifts spellcaster up',
        url: 'images/wandmotion7.svg',
    },

    {
        name: 'Tarantallegra',
        class: 'Curse',
        purpose: 'Makes victim dance uncontrollably',
        url: 'images/wandmotion8.svg',
    },

    {
        name: 'Reparo',
        class: 'Charm',
        purpose: 'Repairs objects',
        url: 'images/wandmotion9.svg',
    },

    {
        name: 'Arresto Momentum',
        class: 'Charm',
        purpose: "Slows a target's velocity",
        url: 'images/wandmotion10.svg',
    },

    {
        name: 'Wingardium Leviosa',
        class: 'Charm',
        purpose: 'Makes objects float',
        url: 'images/wandmotion11.svg',
    },

    {
        name: 'Revelio',
        class: 'Charm',
        purpose: 'Reveals hidden objects',
        url: 'images/wandmotion12.svg',
    },

    {
        name: 'Expelliarmus',
        class: 'Charm',
        purpose: 'Disarms opponent',
        url: 'images/wandmotion13.svg',
    },

    {
        name: 'Lumos & Nox',
        class: 'Charm',
        purpose: 'Iluminates and darkens wand tip',
        url: 'images/wandmotion14.svg',
    },

    {
        name: 'Finite Incantatem',
        class: 'Counter spell',
        purpose: 'Terminates all spell effects',
        url: 'images/wandmotion15.svg',
    },

];

console.table(spells);

let randomSpell = Math.floor(Math.random() * spells.length);
console.log(randomSpell);
    
document.getElementById("spellTemplate").src = spells.url;