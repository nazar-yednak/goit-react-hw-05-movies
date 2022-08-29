import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovies } from '../../API/API';
import { NavItem, Wrapper, Image } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
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
  const trendMovile = movies.map(({ id, title, poster_path }) => (
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
