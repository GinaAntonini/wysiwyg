// Create an array of objects that represents famous people (see structure below).

var famousPeople = [
{ title: "King of Pop",
  name: "Michael Jackson",
  bio: "Michael Joseph Jackson was an American singer, songwriter and dancer. He was one of the most popular entertainers in the world, and was the best-selling music artist at the time of his death. Jackson's contributions to music, dance, and fashion along with his publicized personal life made him a global figure in popular culture for over four decades.",
  image: "http://2.bp.blogspot.com/_TcwggGNDhjE/SwsAT11xy2I/AAAAAAAAAlA/kO7q9oSrZU4/s1600/michael-jackson-11.jpg",
  lifespan: {
    birth: 1958,
    death: 2009
  }
},
{ title: "Ziggy Stardust",
  name: "David Bowie",
  bio: "David Robert Jones known professionally as David Bowie was an English singer, songwriter and actor. He was a leading figure in popular music for over five decades, acclaimed by critics and other musicians for his innovative work. His career was marked by reinvention and visual presentation. During his lifetime, his record sales, estimated at 140 million albums worldwide, made him one of the world's best-selling music artists.",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/David-Bowie_Chicago_2002-08-08_photoby_Adam-Bielawski-cropped.jpg",
  lifespan: {
    birth: 1947,
    death: 2016
  }
},
{ title: "Wino",
  name: "Amy Winehouse",
  bio: "Amy Jade Winehouse was an English singer and songwriter. She was known for her deep, expressive contralto vocals and her eclectic mix of musical genres, including soul, rhythm and blues, and jazz. Her follow-up album, Back to Black (2006), led to five 2008 Grammy Awards, tying the then record for the most wins by a female artist in a single night.",
  image: "http://i2.mirror.co.uk/incoming/article10548992.ece/ALTERNATES/s615b/PROD-BRIT-Awards-2007-Show.jpg",
  lifespan: {
    birth: 1983,
    death: 2011
  }
},
{ title: "First Lady of Rock 'n' Roll",
  name: "Janis Joplin",
  bio: "Janis Lyn Joplin was an American rock singer and songwriter. She was one of the biggest female rock stars of her era. After releasing three albums, she died of an accidental heroin overdose at age 27. A fourth album, Pearl, was released in January 1971, just over three months after her death, reaching number one on the charts.",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Janis_Joplin_seated_1970.JPG",
  lifespan: {
    birth: 1943,
    death: 1970
  }
},
{ title: "Motown Legend",
  name: "Marvin Gaye",
  bio: "Marvin Gaye was an American singer, songwriter and record producer. During the 1970s, he recorded the concept albums What's Going On and Let's Get It On and became one of the first artists in Motown to break away from the reins of a production company.",
  image: "https://i.pinimg.com/736x/51/5e/75/515e7506143e5ee34d5328e2e84e44f8--marvin-gaye-marvin-marvin.jpg",
  lifespan: {
    birth: 1939,
    death: 1984
  }
},
{ title: "",
  name: "Jeff Buckley",
  bio: "Jeff Buckley was an American singer-songwriter and guitarist. After a decade as a session guitarist in Los Angeles, Buckley amassed a following in the early 1990s by playing cover songs at venues in Manhattan's East Village. He signed with Columbia, recruited a band, and recorded what would be his only studio album, Grace, in 1994.",
  image: "https://e.snmc.io/lk/f/a/ad793923e389c41e922c35e853343f0e/912922.jpg",
  lifespan: {
    birth: 1966,
    death: 1997
  }
}];

// Create a text input in your DOM.
var textInputArea = document.getElementById("typeTextHere");

// Beneath that, create a container, block element in your DOM.
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
var domString = document.getElementById("famousPeopleElement");
var peopleCardClassSelector = document.getElementsByClassName("peopleCard");

for (var i = 0; i < famousPeople.length; i++) {
  var peopleCard = famousPeople[i];
domString.innerHTML += `<person id="peopleCard-${i}" class="peopleCard">
<header class="personsNameAndTitle>
<h1 class="name">${peopleCard.name}</h1>
<h2 class="title">${peopleCard.title}</h2>
</header>
<section>
<img class="photos" src="${peopleCard.image}">
<p class="peopleBio">${peopleCard.bio}</p>
</section>
<footer class="lifespanOf">
<p>Born: ${peopleCard.lifespan.birth}</p>
<p>Died: ${peopleCard.lifespan.death}</p>
</footer>
</person>`
}
// For every even numbered element, have a light yellow background.
//did this in css

// For every odd numbered element, have a light blue background.
//did this in css


// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
for (var i = 0; i < peopleCardClassSelector.length; i++) {
  peopleCardClassSelector[i].addEventListener("click", addAborder);

function addAborder (event) {
  for (var j = 0; j < peopleCardClassSelector.length; j++){
    peopleCardClassSelector[j].classList.remove("border");
  }
  peopleCardClassSelector[this.id].classList.add("border");
  textInputArea.focus();
  }
}

// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.


// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

