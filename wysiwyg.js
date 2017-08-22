// Create an array of objects that represents famous people (see structure below).

var famousPeople = [
{ title: "King of Pop",
  name: "Michael Jackson",
  bio: "Michael Joseph Jackson was an American singer, songwriter and dancer. He was one of the most popular entertainers in the world, and was the best-selling music artist at the time of his death. Jackson's contributions to music, dance, and fashion along with his publicized personal life made him a global figure in popular culture for over four decades.",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson_in_1988.jpg",
  lifespan: {
    birth: 1958,
    death: 2009
  }
},
{ title: "Musician",
  name: "David Bowie",
  bio: "David Robert Jones known professionally as David Bowie was an English singer, songwriter and actor. He was a leading figure in popular music for over five decades, acclaimed by critics and other musicians for his innovative work. His career was marked by reinvention and visual presentation, his music and stagecraft significantly influencing popular music. During his lifetime, his record sales, estimated at 140 million albums worldwide, made him one of the world's best-selling music artists.",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/David-Bowie_Chicago_2002-08-08_photoby_Adam-Bielawski-cropped.jpg",
  lifespan: {
    birth: 1947,
    death: 2016
  }
},
{ title: "Musician",
  name: "Amy Winehouse",
  bio: "Amy Jade Winehouse was an English singer and songwriter. She was known for her deep, expressive contralto vocals and her eclectic mix of musical genres, including soul, rhythm and blues, and jazz. Her follow-up album, Back to Black (2006), led to five 2008 Grammy Awards, tying the then record for the most wins by a female artist in a single night.",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Amy_Winehouse_Kidney_2008.jpg",
  lifespan: {
    birth: 1983,
    death: 2011
  }
},
{ title: "Musician",
  name: "Janis Joplin",
  bio: "Janis Lyn Joplin was an American rock singer and songwriter. She was one of the biggest female rock stars of her era. After releasing three albums, she died of an accidental heroin overdose at age 27. A fourth album, Pearl, was released in January 1971, just over three months after her death. It reached number one on the charts.",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Janis_Joplin_seated_1970.JPG",
  lifespan: {
    birth: 1943,
    death: 1970
  }
}];

// Create a text input in your DOM.
var textInputArea = document.getElementById("inputField");

// Beneath that, create a container, block element in your DOM.
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
var domString = document.getElementById("famousPeopleElement");

for (var i = 0; i < famousPeople.length; i++) {
  var peopleObject = famousPeople[i];
  domString.innerHTML += `<div class="containerForPeople">`
  domString.innerHTML += `<person id="peopleObject-${i}" class="peopleObject">`;
  domString.innerHTML += `<header class="personsNameAndTitle>`;
  domString.innerHTML += `<h1 class="name">${peopleObject.name}</h1>`;
  domString.innerHTML += `<h2 class="title">${peopleObject.title}</h2>`;
  domString.innerHTML += `</header>`;
  domString.innerHTML += `<section>`;
  domString.innerHTML += `<img class="photos" src="${peopleObject.image}">`;
  domString.innerHTML += `<p class="peopleBio">${peopleObject.bio}</p>`;
  domString.innerHTML += `</section> `;
  domString.innerHTML += `<footer class="lifespanOf">`;
  domString.innerHTML += `<p>Born: ${peopleObject.lifespan.birth}</p>`;
  domString.innerHTML += `<p>Died: ${peopleObject.lifespan.death}</p>`;
  domString.innerHTML += `</footer>`;
  domString.innerHTML += `</person>`;
  domString.innerHTML += `</div>`;
}

// For every even numbered element, have a light yellow background.


// For every odd numbered element, have a light blue background.


// Each element's DOM structure should be as shown below.


// When you click on one of the person elements, a dotted border should appear around it.


// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.


// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.


// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

