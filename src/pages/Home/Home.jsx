import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { getMovies } from '../../API/API';
import { Wrapper, Title } from './Home.styled';
import MoviesGalerry from '../../components/MoviesGalerry/MoviesGalerry';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const page = 1;

  useEffect(() => {
    const fetchMovies = () => {
      try {
        getMovies(page).then(res => setMovies(res.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <>
      <Title>Trending today</Title>
      <Wrapper>
        {movies.length > 0 && <MoviesGalerry movies={movies} />}
      </Wrapper>
    </>
  );
};

export default Home;
