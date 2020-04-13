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

      // for testing the last card
      // const currentCard = data.length - 1;

      // Random card generator
      const currentCard = getRandomInt(data.length);
      // Card title
      tarotTitle.innerHTML = data[`${currentCard}`].cardName;
      // Card image
      image.src = data[`${currentCard}`].image;
      // Card Description
      tarotMeaning.innerHTML = data[`${currentCard}`].description;
    });

  })
  .catch(err => {
    title.innerHTML = "Your charas must be unaligned! Something is amiss, please refresh the page.";
    container.style.display = "none";
    controls.style.display = "none";
    console.error(err);
  })


