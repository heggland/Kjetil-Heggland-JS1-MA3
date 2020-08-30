// master url for the api call
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

// read div from html to use with innerHTML print method.
const resultContainer = document.querySelector(".results");

async function getGames() {
    try {
    //get intel from api

    const response = await  fetch(url);

    const result = await response.json();

    const games = result.results;

    resultContainer.innerHTML = "";

// loop through the list
    for (let i = 0; i < games.length; i++) {
        
// prints out 8 games
        if (i === 8) {
            break;
        }
        
       
// assigning variables on the object properties 
        name = games[i].name;
        ratings = games[i].rating;
        tags = games[i].tags.length;

// prints to HTML
        resultContainer.innerHTML += 
        `<div class="result">
        <h2>Title: ${name}</h2>
        <p>Rating: ${ratings}</p>
        <p>Tags: ${tags}</p>
        </div>
        `;
    }
} catch(error) {
    console.log("error occured", error)
    resultContainer.innerHTML = displayError("error fetching data");
}
finally { //code to run even if error occure in the exception- try statement.
    console.log("try-catch method");
}

}

getGames();

