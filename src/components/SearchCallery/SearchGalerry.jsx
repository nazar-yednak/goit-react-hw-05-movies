import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const SearchCallery = ({ movies }) => {
  const location = useLocation();
  console.log(movies.poster_path);
  return (
    <div>
      {movies.length > 0 &&
        movies.map(({ id, title, poster_path }) => (
          <Link key={id} state={{ from: location }} to={`${id}`}>
            {title}
            {poster_path.length > 0 && (
              <img
                src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
                alt={title}
              />
            )}
          </Link>
        ))}
    </div>
  );
};

SearchCallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
export default SearchCallery;
