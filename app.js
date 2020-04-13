const pullCard = document.getElementById("pullCard");
const tarotTitle = document.getElementById("tarotTitle");
const image = document.getElementById("image");
const tarotMeaning = document.getElementById("tarotMeaning");

// random number function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const tarotCards = [
  {
    cardName: "High Priestess",
    image: "highPriestess.jpg",
    description: "I am a high priestess"
  },
  {
    cardName: "the Magician",
    image: "theMagician.jpg",
    description: "I am a magician"
  },
  {
    cardName: "The Empress",
    image: "theEmpress.jpg",
    description: "I am an Empress"
  }
];

pullCard.addEventListener('click', e => {
  const currentCard = getRandomInt(3);
  // Card title
  tarotTitle.innerHTML = tarotCards[`${currentCard}`].cardName;
  // Card image
  image.src = tarotCards[`${currentCard}`].image;
  // Card Description
  tarotMeaning.innerHTML = tarotCards[`${currentCard}`].description;
});

