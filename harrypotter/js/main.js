const requestURL = "https://hp-api.herokuapp.com/api/characters"

function fetch_info(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.table(json)

            const characters = json;
            console.table(characters);

            //declare elements for trading cards
            for (let i = 0; i < characters.length; i++) {
                let card = document.createElement('div');
                let section = document.createElement('section');
                let front = document.createElement('div');
                let back = document.createElement('div');
                let name = document.createElement('h2');
                let ancestry = document.createElement('p');
                let yearOfBirth = document.createElement('p');
                let eyeColour = document.createElement('p');
                let gender = document.createElement('p');
                let hairColour = document.createElement('p');                          
                let species = document.createElement('p');
                let wand = document.createElement('p');
                let patronus = document.createElement('p');
                let image = document.createElement('img');

            //write text content for cards and set attributes as necessary for styling etc.
                card.setAttribute('class', 'card');
                front.setAttribute('class', 'front');
                back.setAttribute('class', 'back');                
                name.textContent = characters[i].name;
                image.setAttribute('src', characters[i].image,);
                image.setAttribute('alt', characters[i].name);
                image.setAttribute('class', 'cardImages');
                // front.setAttribute('class', 'hide');
                ancestry.textContent = 'Ancestry:' + ' ' + characters[i].ancestry;
                yearOfBirth.textContent = 'Year of Birth:' + ' ' + characters[i].yearOfBirth;
                hairColour.textContent = 'Hair Colour:' + ' ' + characters[i].hairColour;
                eyeColour.textContent = 'Eye Colour:' + ' ' + characters[i].eyeColour;
                gender.textContent = 'Gender:' + ' ' + characters[i].gender;
                species.textContent = 'Species:' + ' ' + characters[i].species;
                patronus.textcontent = 'patronus' + ' ' + characters[i].patronus
                wand.textContent = 'Wand:' + ' ' + characters[i].wand.wood + ',' + ' ' + characters[i].wand.core + ',' + ' ', + characters[i].wand.length + ' ', + 'inches';
             
                
                console.log(wand.textContent);
                

            //Information going to the page
                card.appendChild(front);
                card.appendChild(back);                
                front.appendChild(name);
                front.appendChild(image)
                back.appendChild(ancestry);
                back.appendChild(yearOfBirth);
                back.appendChild(hairColour);
                back.appendChild(eyeColour);
                back.appendChild(gender);
                back.appendChild(species);
                back.appendChild(patronus);
                back.appendChild(wand);
                

            //event listener for card. Note the arrow function--it fixes problem of event listener being triggered immediately
                card.addEventListener("click", () => toggleHide(info_div));

            //append card  
                document.querySelector('div.wrapper').appendChild(card)    
                document.querySelector('div.card').appendChild(section);
            }

        });
}

// calling function to get URL for pages
fetch_info(requestURL);


// function to toggle details about each individual
// function toggleHide(info_div) {
//     info_div.classList.toggle('hide');
// }