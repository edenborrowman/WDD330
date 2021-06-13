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
document.getElementById("lastModified").textContent = oLastModif;

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');//Using getContext method
context.fillStyle = 'blue';
context.fillStyle = 'rgba(0, 0, 225, 0.5)';
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

// function drawCircle(canvas) {
//   var canvas = document.getElementById("myCanvas2");
//   var context = canvas.getContext("2d");
//   context.beginPath();
//   context.arc(50, 50, 30, 0, Math.PI*2, true);
//   context.closePath(); 
//   context.strokeStyle = "red";
//   context.fillStyle = "blue";
//   context.lineWidth = 3;
//   context.fill(); 
//   context.stroke();
// }

// window.addEventListener("load", drawImageToCanvas, false);

// function drawImageToCanvas() {
//   var canvas = document.getElementById("demo6");
//   var context = canvas.getContext("2d");
//   var image = document.getElementById("myImageElem");
//   context.drawImage(image, 0, 0); 
// }

// function determineLocation() {
//   if (navigator.onLine) {
//   if (Modernizr.geolocation) {
//       navigator.geolocation.getCurrentPosition(displayOnMap)};
  
//       var container = Raphael(document.getElementById("spinner"), 125, 125);

// var container = Raphael(document.getElementById("spinner"), 125, 125);
// var spinner = container.image("images/spinnerBW.svg", 0, 0, 125, 125);}
