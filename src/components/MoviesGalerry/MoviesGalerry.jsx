import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MoviesGalerry = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map(({ id, title, poster_path }) => (
        <Link key={id} state={{ from: location }} to={`movies/${id}`}>
          {title}
          <img
            src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
            alt={title}
          />
        </Link>
      ))}
    </div>
  );
};

MoviesGalerry.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
export default MoviesGalerry;
