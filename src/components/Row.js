import React, {useState, useEffect} from 'react'
import axios, {requests} from "../axios";
import "../styles/Row.css";

const imageBaseURL = "https://image.tmdb.org/t/p/original"

function Row(props) {
    var [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies(){
            const res = await axios.get(requests[props.type]);
            setMovies(res.data.results);
        }

        fetchMovies();
    }, [])
    return (
        <div className="Row">
            <h1>{props.genre}</h1>
            <div className="Row_images">
            {movies.map((movie) => {
                return <img src={`${imageBaseURL}${props.isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.title} key={movie.id} className="Row_image"/>
            })}
            </div>
        </div>
    )
}

export default Row
