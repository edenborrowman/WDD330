var links = [
    {
        label: "Week 1",
        notes: "Notes and Examples",
        url: "https://edenborrowman.github.io/WDD330/week1/notes.html"
    },

    {
        label: "Week 2",
        notes: "Notes and Examples",
        url: "https://edenborrowman.github.io/WDD330/week/notes.html"

    },

    {
        label: "Week 2",
        notes: "Notes and Examples",
        url: "https://edenborrowman.github.io/WDD330/week/notes.html"

    }
]
var i;

for(i = 0; i<links.length; i++){

let new_week = document.createElement('li');
let new_notes = document.createElement('a');

new_week.textContent = links[i].label;
new_notes.textContent = links[i].notes;
new_notes.setAttribute('href', links[0].url);

document.querySelector('ol.new_entry').appendChild(new_week);
document.querySelector('ol.new_entry').appendChild(new_notes);

}