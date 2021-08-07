import React from 'react'
import { Filter } from './Filter'
import ReactPlayer from 'react-player'
import movies from "../Data"





export const Trailer = (props) => {

    const movieId= Number(props.match.params.id);

    const movie = movies.filter(movie => {
        if (movie.id === movieId) {
            return movie;
        }
        return false;
    });
    return (
        <div className="trailer">
            <Filter/>
            <h1 className="mt-3 mb-3">{movie[0].name}</h1>
            
            <ReactPlayer className="p2"  config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }} controls url={movie[0].trailer} />
            <p className="mt-3 mb-3">{movie[0].description}</p>
        </div>
    )
}
