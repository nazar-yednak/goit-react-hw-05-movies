import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { searchMovies } from '../../API/API';
import SearchForm from '../../components/SearchForm/SearchForm';

const Movies = () => {
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const changeSearch = ({ search }) => {
    setSearchParams({ search });
  };
  useEffect(() => {
    const searchMovie = () => {
      try {
        searchMovies({ search }).then(setMovies);
      } catch (error) {}
    };

    searchMovie();
  }, [search]);

  return (
    <div>
      <SearchForm onSubmit={changeSearch} />
      {search &&
        movies.map(({ id, title, poster_path }) => (
          <li>
            <NavLink key={{ id }} state={{ from: location }} to={`${id}`}>
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
