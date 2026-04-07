const div = document.getElementById('movie-info');

// Define the Movie class
class Movie{
  constructor(title, cast, description, rating) {
    this.title = title;
    this.cast = cast;
    this.description = description;
    this.rating = rating;
  }

  updateRating(newRating) {
    this.rating = newRating;
  }

  displayInfo() {
    div.innerHTML += `<p><strong>Title</strong>: ${this.title}</p>`;
    div.innerHTML += `<p><strong>Cast:</strong> ${this.cast.join(', ')}</p>`;
    div.innerHTML += `<p><strong>Description:</strong> ${this.description}</p>`;
    div.innerHTML += `<p><strong>Rating:</strong> ${this.rating}</p>`;
    div.innerHTML += "<br>";
  }
}
  
  
  // title, cast, description, rating

  // Method to update the rating of the movie

  // Method to display the movie's information


// Test your implementation
const movie = new Movie('Seventeen Again', ['Tia Mowry', 'Tamera Mowry', 'Mark Taylor'], 'Seventeen Again is an American fantasy–comedy film', 8.8);
movie.displayInfo();
let movies = [];
movies.push(movie);

function updateMovieRating(title, newRating) {
  
  for (let m of movies) {
    if (m.title === title) {
      div.innerHTML += `<h3>Updating rating</h3>`;
      m.updateRating(newRating);
      break;
    }  
  }
}
// Display the initial information of the movie

// Update the rating of the movie
updateMovieRating('Seventeen Again', 9.2);
// Display the updated information of the movie

movie.displayInfo();