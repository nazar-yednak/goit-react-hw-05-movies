import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchCallery from '../../components/SearchCallery/SearchGalerry';
import { searchMovies } from '../../API/API';
import SearchForm from '../../components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const changeSearch = ({ search }) => {
    setSearchParams({ search });
  };
  useEffect(() => {
    if (!search) {
      return;
    }
    const searchMovie = () => {
      try {
        searchMovies({ search }).then(res => setMovies(res.results));
      } catch (error) {}
    };

    searchMovie();
  }, [search]);
  console.log(movies);
  return (
    <div>
      <SearchForm onSubmit={changeSearch} />
      {search && <SearchCallery movies={movies} />}
    </div>
  );
};
// zzxczxc

export default Movies;
