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

// Replace ./data.json with your JSON feed
fetch('./tarotCards.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    // const currentCard = getRandomInt(3);
    // console.log(data[`${currentCard}`].cardName)

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
    // image.style.display = "none";
    // tarotMeaning.style.display = "none";
    // pullCard.style.display = "none";
    console.error(err);
  })

// fetch('tarotCards.json')
//   .then((response) => {
//     return response.json();
//   })
//   .catch(err => {
//     question.innerHTML = "Your charas must be unaligned! Something is amiss, please refresh the page.";
//     console.error(err);
//   });

// // random planet function, writes to page
// const playerPlanet = () => {
//   const planet = `https://swapi.co/api/planets/${randoNum(61, 1)}`
//   fetch(planet)
//     .then(x => x.json())
//     .then(data => {
//       const myPlanet = document.querySelector('#planet')
//       myPlanet.innerHTML = data.name
//       if (data.name === undefined) {
//         myPlanet.innerHTML = "Oops. Something went wrong. Please Reload."
//       }
//     })
// }


// pullCard.addEventListener('click', e => {
//   const currentCard = getRandomInt(3);
//   // Card title
//   tarotTitle.innerHTML = tarotCards[`${currentCard}`].cardName;
//   // Card image
//   image.src = tarotCards[`${currentCard}`].image;
//   // Card Description
//   tarotMeaning.innerHTML = tarotCards[`${currentCard}`].description;
// });

