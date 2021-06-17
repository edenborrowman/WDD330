let links = [
    {
        label: "Week 1: April 18 - April 24",
        notes: "Notes and Examples",
        url: "notes1.html",
        group: "no group this week",
        assignment: "no assignment this week"
    },

    {
        label: "Week 2: April 25 - May 1",
        notes: "Notes and Examples",
        url: "notes2.html",
        group: "Weekly Group Assignment",
        teamUrl: "team_meeting/week2.html",
        assignment: "no assignment this week"

    },
    {
        label: "Week 3: May 2 - May 8",
        notes: "Notes and Examples",
        url: "notes3.html",
        group: "Weekly Group Assignment",
        teamUrl: "team_meeting/week3.html",
        assignment: "no assignment this week"

    },

    {
        label: "Week 4: May 9 - May 15",
        notes: "Notes and Examples",
        url: "notes4.html",
        group: "Weekly Group Assignment",
        teamUrl: "team_meeting/week4",
        assignment: "Form Validation Exercise",
        assignmentUrl: "form_practice"
    },

    {
        label: "Week 5: May 16 - May 22",
        notes: "Notes and Examples",
        url: "notes5.html",
        group: "Weekly Group Assignment",
        teamUrl: "team_meeting/week5",
        assignment: "no assignment this week"
    },

    {
        label: "Week 6: May 23 - May 29",
        notes: "no notes this week",
        url: "no notes this week",
        group: "no group this week",
        assignment: "Midterm Productivity App",
        assignmentUrl: "to_do"
    },
    {
        label: "Week 7: May 30 - June 5",
        notes: "Notes and Examples",
        url: "notes7.html",
        group: "Weekly Group Assignment",
        teamUrl: "team_meeting/hike_7",
        assignment: "CSS battle",
        assignmentUrl: "https://cssbattle.dev/play/21"        
    },

    {
        label: "Week 8: June 6 - June 12",
        notes: "Notes and Examples",
        url: "notes8.html",
        group: "Weekly Group Assignment",
        teamUrl: "team_meeting/week8",
        assignment: "Report",
        assignmentUrl: "week8report.html"        
    },
    
    {
        label: "Week 9: June 13 - June 19",
        notes: "Notes and Examples",
        url: "notes9.html",
        group: "Weekly Group Assignment",
        teamUrl: "team_meeting/javascript30-drums/index-start.html",
        assignment: "Second Block Project Proposal",
        assignmentUrl: "proposal.html"        
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
    notes.innerHTML = '<a href="' + links[i].url + '">' + links[i].notes + '</a>' 
    team.innerHTML = '<a href="' + links[i].teamUrl + '">' + links[i].group + '</a>'   
    assignment.innerHTML = '<a href="' + links[i].assignmentUrl + '">' + links[i].assignment + '</a>'       
    
    card.setAttribute('class', 'cards');
    work_id.setAttribute('class', 'new_entry');
    assignment_group.setAttribute('ol', 'assignment_group')
    
   

    card.appendChild(assignment_group);
    assignment_group.appendChild(work_id); 
    work_id.appendChild(notes);
    work_id.appendChild(team);
    work_id.appendChild(assignment);
   

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