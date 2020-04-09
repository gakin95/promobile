// Set config defaults when creating the instance
const api = 'http://localhost:3000/api';
const moviesApi = 'https://yts.mx/api/v2';
export const config = {
  register: api + '/user',
  login:api + '/auth',
  movies: moviesApi + '/list_movies.json',
  moviesDetails: moviesApi + '/movie_details.json?movie_id='
}
   
