// Question 1

const arrowFunction = (a, b) => a - b;

// Question 2

const baseUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(baseUrl)
.then(function(response) {
    return response.json();
})

.then(function(json) {
    console.dir(json);
})
.catch(function(error) {
    console.dir(error.html);
})

// Question 3

const headingText = document.querySelector("h1");

const changeHeading = headingText.innerHTML.replace(/cats/g, "giraffes");

headingText.innerHTML = changeHeading;

// Question 4

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

if (!params.has("userId")) {
    document.location.href="third.html";

} else if (params.get("userId")< 10) {
    document.location.href="first.html";
    
} else {
    document.location.href="second.html";
}

// Question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");
container.removeChild(button);


// Question 6


const newLi = document.createElement("li");

li.className = "parrots";
li.textContent = "parrots";

const parentList = document.querySelector(".animals");
const listchildren = parentList.children;
listchildren[0].after(li);

// Question 7

const ratingsUrl = "https://api.rawg.io/api/games/3801";

fetch(ratingsUrl)
  .then(response => response.json())
  .then(json => gameRating(json))
  .catch(error => console.dir(error));

function gameRating(json) {

  const ratingContainer = document.querySelector(".rating");
  ratingContainer.innerText = json.rating;

}



















