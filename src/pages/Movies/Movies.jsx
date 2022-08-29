import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { searchMovies } from '../../API/API';
import SearchForm from '../../components/SearchForm/SearchForm';

const Movies = () => {
  const location = useLocation();

  const [state, setState] = useState({
    movies: [],
    page: 1,
    loading: false,
    error: null,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const changeSearch = ({ search }) => {
    setSearchParams({ search });
  };
  useEffect(() => {
    const searchMovie = async () => {
      try {
        const result = await searchMovies({ search });
        setState(prevState => {
          return {
            ...state,
            movies: [...result],
          };
        });
      } catch (error) {}
    };

    searchMovie();
  }, [search]);

  return (
    <div>
      <SearchForm onSubmit={changeSearch} />
      {search &&
        state.movies.map(({ id, title, poster_path }) => (
          <li>
            <NavLink key={id} state={{ from: location }} to={`${id}`}>
              {title}
              <img
                src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
                alt={title}
              />
            </NavLink>
          </li>
        ))}
    </div>
  );
};
// zzxczxc

export default Movies;
