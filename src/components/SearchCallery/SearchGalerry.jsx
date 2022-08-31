import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { SearchContainer, LinkMovie, Image } from './SearchGalerry.styled';
const SearchCallery = ({ movies }) => {
  const location = useLocation();

  return (
    <SearchContainer>
      {movies.length > 0 &&
        movies.map(({ id, title, poster_path }) => (
          <LinkMovie key={id} state={{ from: location }} to={`${id}`}>
            <Image
              height="100%"
              src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
              alt={title}
            />
            {title}
          </LinkMovie>
        ))}
    </SearchContainer>
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
