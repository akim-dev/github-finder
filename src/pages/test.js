const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjE3YzQwMzE1MjQ0NmMxYTZiMDgyMmQ3NTRjZWM3MiIsInN1YiI6IjY0ZTJkMmM0ZGE5ZWYyNDhmMGZiNzI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVYz4aoOZRBLXVpiTghB3zJrfqUkYFNq_u86_OYV_AU'
    }
  };
  
  fetch('https://api.themoviedb.org/3/search/movie?query=spiderman&include_adult=false&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));



    http://image.tmdb.org/t/p/w500/jHxCeXnSchAuwHnmVatTgqMYdX8.jpg