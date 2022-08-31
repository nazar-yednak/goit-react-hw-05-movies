import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { GalleryContainer, LinkMovie, Image } from './MoviesGalerry.styled';

const MoviesGalerry = ({ movies }) => {
  const location = useLocation();
  return (
    <GalleryContainer>
      {movies.map(({ id, title, poster_path }) => (
        <LinkMovie key={id} state={{ from: location }} to={`movies/${id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
            alt={title}
          />
          {title}
        </LinkMovie>
      ))}
    </GalleryContainer>
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
