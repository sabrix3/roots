import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = ({movies, searchTitle, searchRating}) => {
    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
           {movies
           .filter((movie)=>movie.name.toLowerCase().trim().includes(searchTitle.toLowerCase().trim())&&
           movie.rating >= searchRating
           )

           
           .map((movie)=>(
               <MovieCard movie={movie} key={movie.id}/>

           
           
           ))} 
        </div>
    )
}
