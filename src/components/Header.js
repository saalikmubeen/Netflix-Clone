import React, {useEffect, useState} from 'react'
import instance, {requests} from "../axios";
import "../styles/Header.css";

const imageBaseURL = "https://image.tmdb.org/t/p/original"

function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

function Header() {
    var [movie, setMovie] = useState({});

    useEffect(() => {
         async function fetchMovie(){
            var res = await instance.get(requests.fetchNetflixOriginals);
            var movies = res.data.results;
            var movie = movies[Math.floor(Math.random() * movies.length)];
             setMovie(movie);
         }
         fetchMovie()
    }, [])

    return (
        <header className="Header" style={{backgroundImage: `url(${imageBaseURL}${movie.backdrop_path})`, backgroundSize: "cover"}}>
             <div className="Header_contents">
             <h1>{movie.name}</h1>
            <div className="Header_btns">
               <button>Play</button>
               <button>My List</button>
            </div>
             <p>{movie.overview}</p>
             </div>

             <div className="Header_bottom"/>
        </header>
    )
}

export default Header
