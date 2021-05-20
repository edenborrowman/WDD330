export default class Hikes {
  constructor() {
    this.imgBasePath = "//byui-cit.github.io/cit261/examples/";
  }


  showHikeList(hikeList, hikeListElement) {
    hikeListElement.innerHTML = "";
    this.renderHikeList(hikeList, hikeListElement);
  }

  renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
      parent.appendChild(this.renderOneHike(hike));
    });
    this.setImageEventListener(hikes);
  }
  renderOneHike(hike) {
    const item = document.createElement("li");

    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}" id=${hike.id}></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;

    return item;
  }

  setImageEventListener(hikes) {
    hikes.forEach(hike => {
      document.getElementById(hike.id).addEventListener(
        'mouseenter', () => {
          console.log(hike.distance);
          document.getElementById('mouseover').classList.remove("nodisplay");
        }
      )
    });
  }

  // setImageEventListener(hikes) {
  //   hikes.forEach(hike => {
  //     document.getElementById(hike.id).addEventListener(
  //       'mouseleave', () => {
  //         console.log("peaches");
  //         document.getElementById('mouseover').classList.add("nodisplay");
  //       }
  //     )
  //   });
  // }
}

renderHikeFullDetails(hike); {
  const fullDetails = document.getElementById("mouseover");

  fullDetails.innerHTML = 
        ` <h3>Difficulty</h3>
              <p>${hike.name}</p><br>
          <h3>Distance</h3>
              <p>${hike.distance}</p><br>
          <h3>Difficulty</h3>
              <p>${hike.difficulty}</p><br>
          <h3>Description</h3>
              <p>${hike.description}</p><br>
          <h3>Directions</h3>
              <p>${hike.directions}</p><br> `
  return fullDetails;
}