import React from "react";

function MovieList({ movies, handleFavouritesClick, favouriteComponent }) {
  const FavouriteComponent = favouriteComponent;
  return (
    <>
      {movies.map((movie, index) => (
        <div className="image-container m-3" key={index}>
          <img src={movie.Poster} alt="movie" />
          <div
            className="overlay d-flex align-items-center justify-content-center"
            onClick={() => handleFavouritesClick(movie)}
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
