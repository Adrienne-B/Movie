//WHy do we have a .jsx extension to a file? in react when you create a nw react component, .jsx is perfereable
//There isnt a difference between a .js or a .jsx file

import React from 'react';

const MovieCard = ({ movie }) => { //to access the movies and not have to repeat put ({ with the movie})
    return (
        <div className="movie">
            <div>
                <p>{movie.year}</p>
            </div>


            <div> 
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via/placeholder.com/400'} alt={movie.Title}/> 
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;

            //If the poster is not equal to N/A (a move that has no image), then we can render a move.poster, but if there is not image
            //then we can render the movie from the site as a placeholder image.