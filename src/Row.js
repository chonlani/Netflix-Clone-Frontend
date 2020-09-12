import React, { useState, useEffect } from 'react'
import axios from "./axios"
import requests from './requests';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
    const [ movies, setMovies] = useState([]);

    //A snippet of code which runs based on a specific condition
    useEffect(() => {
            //if [], run once when the row lodes, and dont run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies)

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
              {/* several row__poster(s) */}

              {movies.map(movie => (
                  <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />        
                  ))}
            </div>

        </div>
    )
}

export default Row

