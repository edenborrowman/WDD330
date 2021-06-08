const requestURL = "https://swapi.dev/api/people"

function fetch_info(url){
fetch(url)
    .then(response => response.json())
    .then(json => {
        console.table(json)

const starwars = json['results'];
// return starwars
console.table(starwars);

let num_pages = Math.ceil(json.count / 10);
console.log(num_pages);

    
document.querySelector('div.tradingCard').innerHTML="";
document.querySelector('div.wrapper').innerHTML="";

let previous = document.createElement('button');
previous.setAttribute('id', 'back');
previous.innerText= 'Back';

document.querySelector('div.wrapper').appendChild(previous);

for(let i=1; i <= num_pages; i++){
    // console.log('button' + i);
    // document.createElement('a')
    let button = document.createElement('button');
    button.innerText = i;
    document.querySelector('div.wrapper').appendChild(button);
    button.addEventListener("click", () => fetch_info('https://swapi.dev/api/people/?page=' + i));
}

let next = document.createElement('button');
next.setAttribute('id', 'next');
next.innerText = 'Next';


next.addEventListener("click", () => fetch_info(json.next));
previous.addEventListener("click", () => fetch_info(json.previous));
document.querySelector('div.wrapper').appendChild(next);




for(let i=0; i < starwars.length; i++) {
    let card = document.createElement('section');
    let info_div = document.createElement('div');
    let h2 = document.createElement('h2');
    let height = document.createElement('p');
    let mass = document.createElement('p');
    let hair_color = document.createElement('p');
    let skin_color = document.createElement('p');
    let eye_color = document.createElement('p');
    let birth_year = document.createElement('p');
    let gender = document.createElement('p');
    let homeworld = document.createElement('a');
    

    h2.textContent = starwars[i].name;
    info_div.setAttribute('class', 'hide');
    height.textContent = 'Height:' + ' ' + starwars[i].height;
    mass.textContent = 'Mass:' + ' ' + starwars[i].mass;
    hair_color.textContent = 'Hair Color:' + ' ' + starwars[i].hair_color;
    skin_color.textContent = 'Skin Color:' + ' ' + starwars[i].skin_color;
    eye_color.textContent = 'Eye Color:' + ' ' + starwars[i].eye_color;
    birth_year.textContent = 'Birth Year:' + ' ' + starwars[i].birth_year;
    gender.textContent = 'Gender:' + ' ' + starwars[i].gender;
    homeworld.textcontent = 'Home World' + ' ' + starwars[i].homeworld;
    homeworld.setAttribute('src', starwars[i].homeworld);

    card.appendChild(h2);
    card.appendChild(info_div);
    info_div.appendChild(height);
    info_div.appendChild(mass);
    info_div.appendChild(hair_color);
    info_div.appendChild(skin_color);
    info_div.appendChild(eye_color);
    info_div.appendChild(birth_year);
    info_div.appendChild(gender);
    info_div.appendChild(homeworld);

    card.addEventListener("click", () => toggleHide(info_div));

    document.querySelector('div.tradingCard').appendChild(card);
}

});}

fetch_info(requestURL);

function toggleHide(info_div){
    info_div.classList.toggle('hide');
}
