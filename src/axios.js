// Set config defaults when creating the instance
//const api = 'http://localhost:3000/api';
//const api = 'https://pumpkin-pie-85222.herokuapp.com/api'
const api = 'http://159.89.89.127:5000/api/';
const moviesApi = 'https://yts.mx/api/v2';
export const config = {
  register: api + '/users',
  login:api + 'users/login',
  //user: api + '/users/me',
  movies: moviesApi + '/list_movies.json',
  moviesDetails: moviesApi + '/movie_details.json?movie_id='
}
   
