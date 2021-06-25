const requestURL = "http://hp-api.herokuapp.com/api/characters"

function fetch_info(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.table(json)

            const characters = json;
            console.table(characters);

            //declare elements for trading cards
            for (let i = 0; i < characters.length; i++) {
                let card = document.createElement('section');
                let info_div = document.createElement('div');
                let h2 = document.createElement('h2');
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
                h2.textContent = characters[i].name;
                image.setAttribute('src', characters[i].image,);
                image.setAttribute('alt', characters[i].name);
                info_div.setAttribute('class', 'hide');
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
                card.appendChild(h2);
                info_div.appendChild(image)
                card.appendChild(info_div);
                info_div.appendChild(ancestry);
                info_div.appendChild(yearOfBirth);
                info_div.appendChild(hairColour);
                info_div.appendChild(eyeColour);
                info_div.appendChild(gender);
                info_div.appendChild(species);
                info_div.appendChild(patronus);
                info_div.appendChild(wand);
                

            //event listener for card. Note the arrow function--it fixes problem of event listener being triggered immediately
                card.addEventListener("click", () => toggleHide(info_div));

            //append card    
                document.querySelector('div.tradingCard').appendChild(card);
            }

        });
}

// calling function to get URL for pages
fetch_info(requestURL);


// function to toggle details about each individual
function toggleHide(info_div) {
    info_div.classList.toggle('hide');
}