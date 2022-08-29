import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovies } from '../../API/API';
import { NavItem, Wrapper, Image } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [state, setState] = useState({
    movies: [],
    page: 1,
    loading: false,
    error: null,
  });
  useEffect(() => {
    const fetchMovies = async () => {
      setState({
        ...state,
        loading: true,
      });
      try {
        const result = await getMovies(state.page).then(res => res.results);
        setState(prevState => {
          return {
            ...prevState,
            movies: [...result],
          };
        });
      } catch (error) {
      } finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };
    fetchMovies();
  }, [state]);
  const trendMovile = state.movies.map(({ id, title, poster_path }) => (
    <NavItem key={id} state={{ from: location }} to={`movies/${id}`}>
      {title}
      <Image
        src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
        alt={title}
      />
    </NavItem>
  ));

  return (
    <>
      <h2>Trending today</h2>
      <Wrapper>
        <Wrapper>{trendMovile}</Wrapper>
      </Wrapper>
    </>
  );
};

export default Home;
