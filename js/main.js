let links = [
    {
        label: "Week 1",
        notes: "Notes and Examples",
        url: "https://edenborrowman.github.io/WDD330/wdd330/assignment_index/notes1.html",
        group: "no group this week",
        assignment: "no assignment this week"
    },

    {
        label: "Week 2",
        notes: "Notes and Examples",
        url: "https://edenborrowman.github.io/WDD330/wdd330/assignment_index/notes2.html",
        group: "Weekly Group Assignment",
        teamUrl: "https://edenborrowman.github.io/WDD330/wdd330/teamMeeting/week2.html",
        assignment: "no assignment this week"

    },
    {
        label: "Week 3",
        notes: "Notes and Examples",
        url: "https://edenborrowman.github.io/WDD330/wdd330/assignment_index/notes3.html",
        group: "Weekly Group Assignment",
        teamUrl: "https://edenborrowman.github.io/WDD330/wdd330/teamMeeting/week2.html",
        assignment: "no assignment this week"

    },

    {
        label: "Week 4",
        notes: "Notes and Examples",
        url: "notes4.html",
        group: "Weekly Group Assignment",
        teamUrl: "team_meeting_week4",
        assignment: "Form Validation Exercise",
        assignmentUrl: "form_practice"
    },

    {
        label: "Week 5: May 16 - May 22",
        notes: "Notes and Examples",
        url: "notes5.html",
        group: "Weekly Group Assignment",
        teamUrl: "team_meeting/week5/",
        assignment: "no assignment this week"
    },

    {
        label: "Week 6: May 23 - May 29",
        notes: "no notes this week",
        group: "no group this week",
        assignment: "Midterm Productivity App",
        assignmentUrl: "to_do"
    },
    {
        label: "Week 7: May 30 - June 5",
        notes: "Notes and Examples",
        group: "Weekly Group Assignment",
        teamURL: "team_meeting/hike_y/",
        assignment: "CSS battle",
        assignmentUrl: "https://cssbattle.dev/play/21"        
    },

    

    
]


var i;

for(i = 0; i<links.length; i++){

    let card = document.createElement('div');
    let assignment_group = document.createElement('ol');
    let work_id = document.createElement('ul');
    let notes = document.createElement('li');
    let team = document.createElement('li');
    let assignment = document.createElement('li');

   
    assignment_group.textContent = links[i].label;    
    notes.textContent= links[i].notes;    
    team.textContent= links[i].group;       
    assignment.textContent= links[i].assignment;
    card.setAttribute('class', 'cards');
    work_id.setAttribute('class', 'new_entry');
    assignment_group.setAttribute('ol', 'assignment_group')
    notes.setAttribute('href', links[i].url);
    team.setAttribute('href', links[i].teamUrl); 
    assignment.setAttribute('href', links[i].assignmentUrl);

    card.appendChild(assignment_group);
    card.appendChild(work_id);
    card.appendChild(notes);
    card.appendChild(team);
    card.appendChild(assignment);
   

    document.querySelector('div.cards').appendChild(card);
   
    
    
    
 
    



let daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate =
  dayName +
  ", " +
  monthName +
  " " +
  d.getDate() +
  ", " +
  d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;

document.getElementById("currentyear").textContent = d.getFullYear();

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").textContent = oLastModif};