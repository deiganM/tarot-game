const pullCard = document.getElementById("pullCard");
const tarotTitle = document.getElementById("tarotTitle");
const image = document.getElementById("image");
const tarotMeaning = document.getElementById("tarotMeaning");
const title = document.querySelector(".title");
const container = document.querySelector(".container");
const controls = document.querySelector(".controls");

// random number function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


const tarotCards = [];

fetch('./tarotCards.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    pullCard.addEventListener('click', e => {
      const currentCard = getRandomInt(3);
      // Card title
      tarotTitle.innerHTML = data[`${currentCard}`].cardName;
      // Card image
      image.src = data[`${currentCard}`].image;
      // Card Description
      tarotMeaning.innerHTML = data[`${currentCard}`].description;
    });

    console.log(data)
  })
  .catch(err => {
    title.innerHTML = "Your charas must be unaligned! Something is amiss, please refresh the page.";
    container.style.display = "none";
    controls.style.display = "none";
    console.error(err);
  })

