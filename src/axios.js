import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});


const requests = {
    fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_genres=99`,
}


export {requests, instance as default};
