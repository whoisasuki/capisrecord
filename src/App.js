import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg'


const API_URL = 'http://www.omdbapi.com?apikey=fe516daa'

const movie = {
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    "Title": "Italian Spiderman",
    "Type": "movie",
    "Year": "2007",
    "imdbID": "tt2705436",
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect( () => {
        searchMovies('pokemon')

    }, []);

    return (
        <div className="app">
            <h1>Capi's records</h1>

            <div className="search">
                <input
                    placeholder="Search movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                    <div className="container"> 
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                    ) : (
                    <div className="empty">
                        <h2>No movies found.</h2>
                    </div>
                    )
            }
        </div>
        )
        }

export default App;